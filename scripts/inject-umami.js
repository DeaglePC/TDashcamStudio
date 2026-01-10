/**
 * Umami Analytics Injection Script
 * 
 * This script injects Umami analytics tracking code into index.html
 * based on environment variables. This allows private deployments
 * to include analytics without committing the tracking code to Git.
 * 
 * Environment Variables:
 *   UMAMI_SCRIPT_URL - The URL of the Umami tracking script (e.g., https://analytics.example.com/script.js)
 *   UMAMI_WEBSITE_ID - The website ID from Umami dashboard
 * 
 * Usage:
 *   node scripts/inject-umami.js
 */

const fs = require('fs');
const path = require('path');

const UMAMI_SCRIPT_URL = process.env.UMAMI_SCRIPT_URL;
const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;

// Support both local development and Docker environment
const possiblePaths = [
  path.join(__dirname, '..', 'src', 'index.html'),       // Local: scripts/inject-umami.js -> src/index.html
  path.join(__dirname, 'html', 'index.html'),            // Docker: /usr/share/nginx/inject-umami.js -> html/index.html
];

function findIndexPath() {
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return null;
}

function injectUmami() {
  if (!UMAMI_SCRIPT_URL || !UMAMI_WEBSITE_ID) {
    console.log('[Umami] No UMAMI_SCRIPT_URL or UMAMI_WEBSITE_ID found, skipping injection.');
    return;
  }

  const indexPath = findIndexPath();
  if (!indexPath) {
    console.error('[Umami] Could not find index.html');
    return;
  }

  console.log('[Umami] Injecting analytics script...');
  console.log(`[Umami] Script URL: ${UMAMI_SCRIPT_URL}`);
  console.log(`[Umami] Website ID: ${UMAMI_WEBSITE_ID}`);
  console.log(`[Umami] Target file: ${indexPath}`);

  const umamiScript = `
    <!-- Umami Analytics -->
    <script defer src="${UMAMI_SCRIPT_URL}" data-website-id="${UMAMI_WEBSITE_ID}"></script>`;

  let html = fs.readFileSync(indexPath, 'utf-8');

  // Check if already injected
  if (html.includes('Umami Analytics')) {
    console.log('[Umami] Analytics already injected, skipping.');
    return;
  }

  // Inject before </head>
  html = html.replace('</head>', `${umamiScript}\n</head>`);

  fs.writeFileSync(indexPath, html, 'utf-8');
  console.log('[Umami] Analytics script injected successfully!');
}

injectUmami();
