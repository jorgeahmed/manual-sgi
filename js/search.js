document.addEventListener('DOMContentLoaded', () => {

    // --- SCROLL REVEAL OPTIMIZADO ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = '0'; // Forzamos inicio invisible
        observer.observe(el);
    });

    // --- SEARCH ENGINE ---
    const searchHtml = `
        <div class="search-container">
            <input type="text" id="searchInput" class="search-input" placeholder="Buscar en documentos...">
            <div id="searchResults" class="search-results"></div>
        </div>
    `;

    // Inyectar en Navbar
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        const searchWrapper = document.createElement('div');
        searchWrapper.innerHTML = searchHtml;
        navLinks.insertBefore(searchWrapper, navLinks.firstChild);
    }

    // Indexación "On-the-fly" (Simulada para estático)
    // En un sitio real grande, esto sería un JSON precompilado.
    const searchIndex = [
        { title: "Router Dinámico", url: "tecnico.html", content: "Data-driven onAccessFormSubmit directorip regional flujo" },
        { title: "Accesos V33", url: "tecnico.html", content: "PDF Telegram correo carta acceso" },
        { title: "Cotizador IA", url: "tecnico.html", content: "Agentes OpenAI costos ingeniería precios unitarios" },
        { title: "Solicitud de Accesos", url: "campo.html", content: "Formulario personal herramienta reporte" },
        { title: "Estatus Telegram", url: "campo.html", content: "Autorizado rechazado notificaciones colores" },
        { title: "Flujo de Aprobación", url: "admin.html", content: "Sheets checkbox autorizar validado" },
        { title: "Dashboard Tracking", url: "admin.html", content: "Bitácora estatus reporte DB_Tracking" },
        { title: "Problemas Comunes", url: "admin.html", content: "PDF no llega telegram no notifica" }
    ];

    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length < 2) {
                resultsContainer.style.display = 'none';
                return;
            }

            const results = searchIndex.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.content.toLowerCase().includes(query)
            );

            renderResults(results);
        });

        // Cerrar al click fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                resultsContainer.style.display = 'none';
            }
        });
    }

    function renderResults(results) {
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div style="padding:10px; opacity:0.6">No se encontraron resultados</div>';
        } else {
            resultsContainer.innerHTML = results.map(item => `
                <div class="search-result-item" onclick="window.location.href='${item.url}'">
                    <h5>${item.title}</h5>
                    <p>${item.content.substring(0, 50)}...</p>
                </div>
            `).join('');
        }
        resultsContainer.style.display = 'block';
    }
});
