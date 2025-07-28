# Amigo Secreto - Proyecto de Sorteo

![Amigo Secreto Banner](assets/amigo-secreto.png)

## Descripción

Este proyecto es una aplicación web simple que permite a los usuarios organizar un sorteo de "Amigo Secreto". Los participantes pueden agregar nombres de amigos a una lista y luego realizar un sorteo aleatorio para seleccionar un ganador.

## Características principales

- **Interfaz intuitiva**: Diseño limpio y fácil de usar
- **Validación de entrada**: Comprueba que los nombres ingresados sean válidos
- **Lista dinámica**: Muestra en tiempo real los nombres agregados
- **Sorteo aleatorio**: Selecciona un ganador al azar de la lista
- **Feedback visual**: Alertas y mensajes claros para el usuario

## Tecnologías utilizadas

- HTML5
- CSS3 (con variables personalizadas)
- JavaScript Vanilla
- [SweetAlert2](https://sweetalert2.github.io/) para alertas visuales
- Google Fonts (Inter y Merriweather)

## Cómo usar

1. Ingresa nombres en el campo de texto
2. Haz clic en "Añadir" para agregarlos a la lista
3. Cuando tengas todos los nombres, haz clic en "Sortear amigo"
4. ¡El sistema seleccionará y mostrará un ganador aleatorio!

## Requisitos de validación

- El nombre no puede estar vacío
- Debe tener al menos 3 caracteres
- No se permiten números como nombres

## Estructura del proyecto

```
amigo-secreto/
├── index.html         # Página principal
├── style.css          # Estilos CSS
├── app.js             # Lógica de la aplicación
└── assets/            # Directorio para imágenes
    └── amigo-secreto.png
    └── play_circle_outline.png
```

## Instalación

No se requiere instalación especial. Simplemente abre el archivo `index.html` en tu navegador web favorito.

## Personalización

Puedes modificar fácilmente:

- Colores en las variables CSS
- Fuentes en el archivo HTML
- Mensajes de alerta en el archivo JavaScript

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request con tus sugerencias.

## Licencia

Este proyecto está bajo la licencia MIT.
