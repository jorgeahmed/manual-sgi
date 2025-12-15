# SGI Documentation Portal 📚

**Sistema de Gestión Integral (SGI) - Portal de Documentación**

Este repositorio contiene el código fuente del sitio de documentación para el Sistema SGI. Es una aplicación web estática diseñada para ser rápida, visualmente atractiva y fácil de navegar.

🔗 **[Ver Sitio en Vivo](https://jorgeahmed.github.io/manual-sgi/)**

## 🚀 Características (V3)

*   **Diseño Premium**: Interfaz moderna con soporte para **Modo Oscuro/Claro** y efectos de Glassmorphism.
*   **Navegación Intuitiva**: Estructura clara dividida en manuales Técnico, de Campo y Administrativo.
*   **Buscador en Tiempo Real**: Indexación automática del contenido en el cliente (JS puro).
*   **Gráficos Interactivos**: Dashboard administrativo potenciado por `ApexCharts.js` para visualización de datos.
*   **Fondo Dinámico**: Animación de partículas (Canvas HTML5) que responde al tema del sistema.
*   **Diagramas de Flujo**: Integración con `Mermaid.js` para renderizar arquitectura y procesos.

## 🛠️ Tecnologías

*   **Core**: HTML5, Vanilla CSS3, Vanilla JavaScript.
*   **Librerías**:
    *   `ApexCharts` (Visualización de datos).
    *   `Mermaid.js` (Diagramas as code).
    *   `ScrollReveal` (Animaciones de entrada - logica custom).
*   **Despliegue**: GitHub Pages.

## 📂 Estructura del Proyecto

```bash
/manual-sistema
├── index.html       # Landing Page
├── tecnico.html     # Manual Técnico (Router, IA, Integraciones)
├── campo.html       # Manual Operativo (Forms, Telegram)
├── admin.html       # Manual Administrativo (Dashboard)
├── css/
│   ├── style.css    # Estilos globales y sistema de diseño
│   └── dashboard.css# Estilos específicos de gráficos
└── js/
    ├── main.js      # Lógica general y animaciones
    ├── search.js    # Motor de búsqueda
    ├── charts.js    # Configuración de gráficas
    └── drive-api.js # Conexión con Google Sheets (Stub)
```

## 📝 Instalación Local

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/jorgeahmed/manual-sgi.git
    ```
2.  Abre `index.html` en tu navegador.
    *No se requiere servidor (Node/Python), aunque se recomienda usar "Live Server" en VS Code para desarrollo.*

## 🤝 Contribución

Para editar el contenido:
1.  Modifica los archivos HTML correspondientes.
2.  Si cambias estilos, edita `css/style.css`.
3.  Haz push a la rama `master`. GitHub Pages actualizará el sitio automáticamente.

---
*Desarrollado para SGI V3 - 2025*
