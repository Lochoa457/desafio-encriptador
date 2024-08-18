# desafio-encriptador
Desafío propuesto por Alura Latam
Este proyecto es una simple aplicación web que permite encriptar y desencriptar texto basado en reglas específicas de reemplazo de letras. La aplicación está diseñada para funcionar en un entorno web y está construida utilizando HTML, CSS, y JavaScript.

## Características

- **Encriptar Texto**: Transforma el texto ingresado en un formato encriptado.
- **Desencriptar Texto**: Convierte el texto encriptado de nuevo a su formato original.
- **Copiar Texto**: Permite copiar el texto encriptado o desencriptado al portapapeles.

## Reglas de Encriptación

Las siguientes reglas de encriptación se aplican al texto ingresado:

- La letra "e" es convertida a "enter"
- La letra "i" es convertida a "imes"
- La letra "a" es convertida a "ai"
- La letra "o" es convertida a "ober"
- La letra "u" es convertida a "ufat"

**Ejemplo:**

- **Entrada:** `gato`
- **Salida:** `gaitober`

## Estructura del Proyecto

- `index.html`: Contiene la estructura principal de la aplicación.
- `style.css`: Archivo de estilos que define el diseño y la disposición de los elementos.
- `script.js`: Contiene la lógica de encriptación, desencriptación y copiado del texto.
- `assets/`: Carpeta que contiene las imágenes usadas en la aplicación (logo, íconos, etc.).

## Uso

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa el texto que deseas encriptar en el área de texto proporcionada.
4. Haz clic en "Encriptar" para encriptar el texto o en "Desencriptar" para revertirlo.
5. Usa el botón "Copiar" para copiar el texto encriptado/desencriptado al portapapeles.

## Requisitos

Este proyecto no tiene dependencias externas. Solo necesitas un navegador web moderno para ejecutarlo.

## Personalización

Si deseas personalizar las reglas de encriptación, puedes modificar las funciones `encriptar()` y `desencriptar()` en el archivo `script.js`.

## Autor

Este proyecto fue creado por Luis Fernando Ochoa Vásquez.
