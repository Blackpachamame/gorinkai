# PWA - Instalar Docker (Windows 10 - Home)

_Esta información es del 2021, por lo que puede estar desactualizada_

## Tabla de contenido

- [Pasos Previos](#pasos-previos)
  - [Requisitos del sistema](#requisitos-del-sistema)
  - [Activar virtualización en la BIOS](#activar-virtualización-en-la-bios)
  - [Instalar y Habilitar Hyper-V](#instalar-y-habilitar-hyper-v)
  - [Descarga del paquete de actualización del kernel de Linux](#descarga-del-paquete-de-actualización-del-kernel-de-linux)
  - [Instalar terminal de Ubuntu](#instalar-terminal-de-ubuntu)
- [Docker](#docker)
  - [Requisitos](#requisitos)
  - [Descargar Docker para Windows](#descargar-docker-para-windows)
  - [Instalar Docker](#instalar-docker)
  - [Habilitar Ubuntu](#habilitar-ubuntu)
  - [Recursos útiles](#recursos-útiles)

## Pasos Previos

Para instalar Docker en Windows 10 en su versión Home debe seguir los siguientes pasos. Probablemente deban reiniciar su pc en cada paso.

### Requisitos del sistema

- Windows 10 Home Edition de 64 bits, versión 2004 o superior
- Al menos 4 GB de RAM

### Activar virtualización en la BIOS

- [Ver vídeo](https://www.youtube.com/watch?v=zDKlht-4L2U)

### Instalar y Habilitar Hyper-V

- [Seguir estos pasos](https://www.jasoft.org/Blog/post/como-instalar-hyper-v-en-windows-10-home-edition)

### Descarga del paquete de actualización del kernel de Linux

- [Descargar paquete](https://docs.microsoft.com/es-es/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package)
- [Establecer WSL 2 como como versión predeterminada](https://docs.microsoft.com/es-es/windows/wsl/install-win10#step-5---set-wsl-2-as-your-default-version)

### Instalar terminal de Ubuntu

- [Buscar en la tienda Microsotf: Ubuntu 20.04 LTS](https://www.microsoft.com/es-ar/p/ubuntu-2004-lts/9n6svws3rx71?rtc=1&activetab=pivot:overviewtab)

## Docker

### Requisitos

- Las características de Hyper-V y contenedores de Windows deben estar habilitadas.
- Tener habilitada la función WSL 2 en Windows. Para obtener instrucciones detalladas, consulte la [documentación de Microsoft](https://docs.docker.com/docker-for-windows/troubleshoot/#virtualization-must-be-enabled).
- El soporte de virtualización de hardware a nivel de BIOS debe estar habilitado en la configuración del BIOS. Para obtener más información, consulte [Virtualización](https://docs.docker.com/docker-for-windows/troubleshoot/#virtualization-must-be-enabled).

### Descargar Docker para Windows

- [Descargar](https://docs.docker.com/docker-for-windows/install/)

### Instalar Docker

1. Abrir el instalador.

2. Asegúrese de que la opción **Enable WSL 2 Windows Features** esté marcada. Haga clic en Aceptar para comenzar la instalación. Este paso suele tardar algunos minutos.

3. Una vez completada la instalación, presione **Close and Restart** para salir del asistente de instalación y reiniciar la computadora. Una vez que la computadora se haya reiniciado, Docker se iniciará solo. (Si estás reinstalando Docker, entonces no se reinicia la pc)

### Habilitar Ubuntu

Si llegaron hasta acá y ven que en Docker aparece un barquito con un fondo verdoso abajo a la izquierda significa que esta casi todo listo.

Ahora solo queda ir a la configuración de _Docker >> Resources >> WSL Integration_ y habilitar donde dice Ubuntu-20.04. Le dan a **Apply & Restart** y ya quedaría todo listo para empezar con Laravel.

### Recursos útiles

- [How to install Docker on Windows 10 Home](https://www.itechtics.com/install-docker/)
- [Docker Desktop WSL 2 backend](https://docs.docker.com/docker-for-windows/wsl/)
- [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [How to Install WSL 2 on Windows 10 - Updated](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10)
- [The Ultimate Guide to Windows Subsystem for Linux](https://adamtheautomator.com/windows-subsystem-for-linux/)
