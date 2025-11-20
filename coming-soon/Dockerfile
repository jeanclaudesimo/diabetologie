FROM nginx:alpine

# Copier la page Landing Page et Logo
COPY index.html /usr/share/nginx/html/index.html
COPY logo.jpg /usr/share/nginx/html/logo.jpg

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
