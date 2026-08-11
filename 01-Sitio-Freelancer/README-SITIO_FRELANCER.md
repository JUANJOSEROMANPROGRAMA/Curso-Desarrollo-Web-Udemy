# Portafolio Freelancer - Diseño y Desarrollo Web

Este proyecto es una Landing Page estática desarrollada desde cero. Su objetivo principal es aplicar los fundamentos del desarrollo web front-end creando una página de presentación profesional para ofrecer servicios de diseño y desarrollo web.

## 🛠️ Tecnologías y Conceptos Aplicados

El proyecto fue construido utilizando únicamente tecnologías base de la web, aplicando buenas prácticas de maquetación y diseño responsivo:

### HTML5

* **Maquetación Semántica:** Uso estructurado de etiquetas como `<header>`, `<nav>`, `<main>`, `<section>` y `<footer>` para maximizar la accesibilidad y el posicionamiento SEO.
* **Formularios Estructurados:** Formulario de contacto optimizado con `<fieldset>`, `<legend>`, `<label>` y diferentes tipos de `<input>` (`text`, `tel`, `email`, `textarea`).
* **Iconografía SVG Integrada:** Inserción directa de vectores de *Tabler Icons* en el documento para reducir peticiones HTTP externas y mejorar la velocidad de carga.

### CSS3

* **Normalize.css:** Normalización previa de estilos para garantizar consistencia entre navegadores (*Chrome, Firefox, Edge, Safari*).
* **Tipografías Externas:** Integración de la fuente "Krub" mediante Google Fonts optimizado con `<link rel="preconnect">`.
* **Variables Nativas (`:root`):** Definición de una paleta de colores global centralizada para facilitar el mantenimiento del código.
* **Unidades Relativas (`rem`):** Ajuste de la tipografía base del selector `html` a `62.5%` ($10\text{px} = 1\text{rem}$) para una gestión intuitiva de tamaños.
* **Layouts Modernos (Flexbox & CSS Grid):**
  * **Flexbox:** Estructuración de la navegación principal, alineación del contenido del *Hero* y organización interna de los servicios.
  * **CSS Grid:** Distribución responsiva a 3 columnas para la sección de servicios y distribución a 2 columnas para el formulario de contacto.
* **Efectos y Utilidades:** Definición de clases globales de sombra (`.sombra`), utilidades Flex/Grid, comportamiento de desplazamiento con *Scroll Snap* (`scroll-snap-type: y mandatory`) e imágenes de fondo con degradados (`linear-gradient`).

---

## 🚀 Estructura del Proyecto

```text

.
├── css/
│   ├── normalize.css
│   └── style.css
├── imagenes/
│   └── hero.jpg
├── index.html
└── README-SITIO_FRELANCER.md
```

## El sitio se organiza en las siguientes secciones principales:

1. **Header:** Encabezado con el nombre y la marca personal.
2. **Navegación (`.nav-bg`):** Barra de enlaces principal orientada al usuario.
3. **Sección Hero:** Banner visual con llamada a la acción (*CTA*) y ubicación geográfica.
4. **Servicios (`<main>`):** Tarjetas promocionales (Diseño Web, Aplicaciones Web, E-Commerce).
5. **Formulario de Contacto:** Captura de datos personales para clientes potenciales.
6. **Footer:** Pie de página con derechos de autor.

## Proyecto desplegado

El proyecto ha sido desplegado en la plataforma de servicio gratis *Netlify*

🌐 **Demo en vivo:** [Ver proyecto](https://jj-dev-code.netlify.app)
