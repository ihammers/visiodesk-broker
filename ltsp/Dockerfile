# FROM ubuntu:16.04 as ltsp-base
FROM champion:ubuntu-base #custom ubuntu 14.04 image

RUN DEBIAN_FRONTEND=noninteractive apt-get -y update \
 && apt-get -y install \
      ltsp-server \
      ltsp-build-client --arch="amd64" --fat-client \
      ltsp-config lts.conf \
      tftpd-hpa \
      nbd-server \
      grub-common \
      grub-pc-bin \
      grub-efi-amd64-bin \
      curl \
      patch \
 && sed -i 's|in_target mount|in_target_nofail mount|' \
      /usr/share/debootstrap/functions \

