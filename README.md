
# k6-prototipo

## 📄 Descripción

Este repositorio contiene un prototipo de pruebas de carga / performance usando k6.  
El objetivo es facilitar la creación, ejecución y mantenimiento de escenarios de carga y pruebas de rendimiento para APIs o servicios web, de forma reproducible y versionada.  

## 🧰 Tecnologías / Herramientas

- **k6** — herramienta de load / performance testing. :contentReference[oaicite:2]{index=2}  
- JavaScript (scripts para k6)  
- (Opcional) Configuración para CI / Integración continua (dependiendo del uso que se le vaya a dar)  

## 🚀 Cómo correr las pruebas

1. Clona este repositorio:

    ```bash
    git clone https://github.com/YairMozo/k6-prototipo.git
    cd k6-prototipo
    ```

2. Instala ‒si aplica‒ dependencias (si tu proyecto las usa).  
   > Nota: si solo vas a usar scripts básicos de k6 no necesitas dependencias externas.

3. Para ejecutar un test básico, puedes usar:

    ```bash
    k6 run ruta/al/script.js
    ```

   Por ejemplo:

    ```bash
    k6 run main.js
    ```
