# 使用一个轻量级的 nginx 镜像作为基础
FROM nginx:alpine

# 安装 Node.js 用于运行注入脚本
RUN apk add --no-cache nodejs

# 将项目中的所有文件复制到 nginx 的网站根目录
COPY src /usr/share/nginx/html
COPY scripts/inject-umami.js /usr/share/nginx/inject-umami.js

# 创建启动脚本
RUN echo '#!/bin/sh' > /docker-entrypoint.d/99-inject-umami.sh && \
    echo 'cd /usr/share/nginx && node inject-umami.js' >> /docker-entrypoint.d/99-inject-umami.sh && \
    chmod +x /docker-entrypoint.d/99-inject-umami.sh

# 暴露 80 端口，以便外部可以访问
EXPOSE 80

# nginx 基础镜像会默认启动服务器
