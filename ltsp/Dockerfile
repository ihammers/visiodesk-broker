FROM ubuntu:16.04 as ltsp-base

RUN DEBIAN_FRONTEND=noninteractive apt-get -y update \
 && apt-get -y install \
 	  apt-utils \
      ltsp-server \
      tftpd-hpa \
      nbd-server \
      grub-common \
      grub-pc-bin \
      grub-efi-amd64-bin \
      curl \
      patch \
 && sed -i 's|in_target mount|in_target_nofail mount|' \
      /usr/share/debootstrap/functions \

# Добавим поддержку EFI и загрузчик Grub (#1745251)
 && rm -rf /var/lib/apt/lists \
 && apt-get clean