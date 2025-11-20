FROM nginx:alpine

# Copier la page Landing Page, Logo et Favicons
COPY index.html /usr/share/nginx/html/index.html
COPY logo.jpg /usr/share/nginx/html/logo.jpg
COPY favicon.ico /usr/share/nginx/html/favicon.ico
COPY favicon.svg /usr/share/nginx/html/favicon.svg

# Configuration Nginx simple
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
