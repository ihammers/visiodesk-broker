cd /opt/services/conf/nginx/ssl/
openssl genrsa -aes256 -out nginx.key 1024
openssl req -new -key nginx.key -out nginx.csr
openssl x509 -req -days 365 -in nginx.csr -signkey nginx.key -out nginx.crt
