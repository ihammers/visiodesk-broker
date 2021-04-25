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

 FROM ltsp-base as basesystem

ARG DEBIAN_FRONTEND=noninteractive

# Подготовим основную систему
RUN mkdir -p /opt/ltsp/amd64/proc/self/fd \
 && touch /opt/ltsp/amd64/proc/self/fd/3 \
 && debootstrap --arch amd64 xenial /opt/ltsp/amd64 \
 && rm -rf /opt/ltsp/amd64/proc/*

# Установим обновления
RUN echo "\
      deb http://archive.ubuntu.com/ubuntu xenial main restricted universe multiverse\n\
      deb http://archive.ubuntu.com/ubuntu xenial-updates main restricted universe multiverse\n\
      deb http://archive.ubuntu.com/ubuntu xenial-security main restricted universe multiverse" \
      > /opt/ltsp/amd64/etc/apt/sources.list \
 && ltsp-chroot apt-get -y update \
 && ltsp-chroot apt-get -y upgrade

# Установим пакеты LTSP
RUN ltsp-chroot apt-get -y install ltsp-client-core

# Применим патчи initramfs
# 1: Чтение параметров из /etc/lts.conf во время загрузки (#1680490)
# 2: Добавим поддержку PREINIT опций в lts.conf
ADD /patches /patches
RUN patch -p4 -d /opt/ltsp/amd64/usr/share < /patches/feature_initramfs_params_from_lts_conf.diff \
 && patch -p3 -d /opt/ltsp/amd64/usr/share < /patches/feature_preinit.diff

# Запишем LTSP_NBD_TO_RAM опцию в локальный конфиг, для загрузки образа в ram:
RUN echo "[Default]\nLTSP_NBD_TO_RAM = true" \
      > /opt/ltsp/amd64/etc/lts.conf

# Установим пакеты
RUN echo 'APT::Install-Recommends "0";\nAPT::Install-Suggests "0";' \
      >> /opt/ltsp/amd64/etc/apt/apt.conf.d/01norecommend \
 && ltsp-chroot apt-get -y install \
      software-properties-common \
      apt-transport-https \
      ca-certificates \
      ssh \
      bridge-utils \
      pv \
      jq \
      vlan \
      bash-completion \
      screen \
      vim \
      mc \
      lm-sensors \
      htop \
      jnettop \
      rsync \
      curl \
      wget \
      tcpdump \
      arping \
      apparmor-utils \
      nfs-common \
      telnet \
      sysstat \
      ipvsadm \
      ipset \
      make

# Установим ядро
RUN ltsp-chroot apt-get -y install linux-generic-hwe-16.04


FROM basesystem as builder

# Скопируем cpuinfo (для сборки из исходников)
RUN cp /proc/cpuinfo /opt/ltsp/amd64/proc/cpuinfo

# Скачаем и скомпилируем Mellanox driver
RUN ltsp-chroot sh -cx \
   '  VERSION=4.3-1.0.1.0-ubuntu16.04-x86_64 \
   && curl -L http://www.mellanox.com/downloads/ofed/MLNX_EN-${VERSION%%-ubuntu*}/mlnx-en-${VERSION}.tgz \
      | tar xzf - \
   && export \
        DRIVER_DIR="$(ls -1 | grep "MLNX_OFED_LINUX-\|mlnx-en-")" \
        KERNEL="$(ls -1t /lib/modules/ | head -n1)" \
   && cd "$DRIVER_DIR" \
   && ./*install --kernel "$KERNEL" --without-dkms --add-kernel-support \
   && cd - \
   && rm -rf "$DRIVER_DIR" /tmp/mlnx-en* /tmp/ofed*'

# Сохраним модули ядра
RUN ltsp-chroot sh -c \
    ' export KERNEL="$(ls -1t /usr/src/ | grep -m1 "^linux-headers" | sed "s/^linux-headers-//g")" \
   && tar cpzf /modules.tar.gz /lib/modules/${KERNEL}/updates'

FROM basesystem as ltsp-image

# Получим модули ядра
COPY --from=builder /opt/ltsp/amd64/modules.tar.gz /opt/ltsp/amd64/modules.tar.gz

# Установим модули ядра
RUN ltsp-chroot sh -c \
    ' export KERNEL="$(ls -1t /usr/src/ | grep -m1 "^linux-headers" | sed "s/^linux-headers-//g")" \
   && tar xpzf /modules.tar.gz \
   && depmod -a "${KERNEL}" \
   && rm -f /modules.tar.gz'

