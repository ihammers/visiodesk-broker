# Pull base image.
FROM debian:buster-slim

# Disable Prompt During Packages Installation
ARG DEBIAN_FRONTEND=noninteractive

# Update Ubuntu Software repository
RUN apt-get -y update \
 && apt-get -y install \
      wget
      #libssl-dev \
      #build-essential \
      #gdb \
      #zlib1g-dev \
      #libpq-dev \
      #postgresql-server-dev-all \
      #build-essential \
      #gcc \
      #make \
      #cmake \
      #cmake-gui \
      #cmake-curses-gui \
      #git \
      #doxygen \
      #graphviz \
      #libssl-dev \
      #openssh-server
      
#RUN wget -O /opt/paho "https://github.com/eclipse/paho.mqtt.c.git" \
#&& wget -O /opt/paho "https://github.com/eclipse/paho.mqtt.cpp.git" 

#&& cmake /opt/paho/paho.mqtt.c \
#      -Bbuild -H. -DPAHO_WITH_SSL=ON \
#      --build build/ --target install \
#&& cp -P build/src/libpaho*.* /usr/local/lib \
#      build/src/libpaho*.* /usr/lib64 \
#&& ldconfig \
#
#&& cmake /opt/paho/paho.mqtt.cpp \ 
#      -Bbuild -H. -DPAHO_BUILD_DOCUMENTATION=TRUE -DPAHO_BUILD_SAMPLES=TRUE \
#      --build build/ --target install \
#&& ldconfig

#EXPOSE 22

# Set environment variables.
#ENV HOME /root

# Define working directory.
#WORKDIR /root

# Define default command.
CMD ["wget -O /opt/paho 'https://github.com/eclipse/paho.mqtt.c.git']