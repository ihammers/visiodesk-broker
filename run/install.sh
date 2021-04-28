#!/bin/bash
# Перед запуском файла выполните команду:
# sudo git clone https://github.com/NPPElement/visiodesk-broker.git /opt/services

# Обновление и подготовка сервера  
sudo apt --assume-yes update
sudo apt --assume-yes upgrade

# Установка необходимых приложений
sudo apt --assume-yes install docker docker.io 
sudo apt --assume-yes install htop mc curl
sudo apt --assume-yes install git jq

# Установка docker-compose
DESTINATION=/usr/bin/docker-compose
sudo curl -L https://289122.selcdn.ru/Visiodesk-Cloud/containers/docker-compose-Linux-x86_64 -o $DESTINATION
#VERSION=$(curl --silent https://api.github.com/repos/docker/compose/releases/latest | jq .name -r)
#sudo curl -L https://github.com/docker/compose/releases/download/${VERSION}/docker-compose-$(uname -s)-$(uname -m) -o $DESTINATION
#sudo curl -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m) -o $DESTINATION
sudo chmod 755 $DESTINATION
docker-compose --version

# Создадим файл с начальными паролями к приложениям
sudo cp -f /opt/services/template-env /opt/services/.env
sudo rm -R /opt/services/template-env

# Запускаем контейнеры
cd /opt/services
sudo docker-compose build
sudo docker-compose up -d --force-recreate

# Сохраним все контейнеры в локальное хранилище
#mkdir /opt/services/data/containers
#docker save -o /opt/services/data/containers/containers-one.tar jwilder/nginx-proxy:latest rabbitmq:3-management portainer/portainer-ce mariadb:10.5 phpmyadmin jboss/wildfly alpine mariadb/maxscale:2.4

# Установлено
echo ' '
echo '************************************'
echo ' '