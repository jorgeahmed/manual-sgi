document.addEventListener('DOMContentLoaded', () => {

    // Check for Dark Mode
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#e0e0e0' : '#212529';
    const bgCard = isDark ? '#1e1e1e' : '#ffffff';

    // --- CHART 1: DONUT (Efectividad) ---
    const optionsDonut = {
        series: [70, 30],
        chart: {
            type: 'donut',
            height: 250,
            background: 'transparent'
        },
        labels: ['Autorizados', 'Rechazados'],
        colors: ['#28a745', '#dc3545'],
        legend: {
            position: 'bottom',
            labels: { colors: textColor }
        },
        dataLabels: {
            enabled: true,
            style: { colors: ['#fff'] }
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: 'Total',
                            color: textColor,
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                            }
                        }
                    }
                }
            }
        }
    };

    const chartDonut = new ApexCharts(document.querySelector("#chart-effectiveness"), optionsDonut);
    chartDonut.render();


    // --- CHART 2: BAR (Volumetría) ---
    const optionsBar = {
        series: [{
            name: 'Tickets',
            data: [45, 30, 25, 10]
        }],
        chart: {
            type: 'bar',
            height: 250,
            background: 'transparent',
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: { enabled: false },
        xaxis: {
            categories: ['Metro Norte', 'Metro Sur', 'Bajío', 'Noreste'],
            labels: { style: { colors: textColor } }
        },
        yaxis: {
            labels: { style: { colors: textColor } }
        },
        colors: ['#0056b3'],
        tooltip: {
            theme: isDark ? 'dark' : 'light'
        }
    };

    const chartBar = new ApexCharts(document.querySelector("#chart-region"), optionsBar);
    chartBar.render();


    // --- THEME LISTENER ---
    // Update charts when theme changes
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            setTimeout(() => {
                const newIsDark = document.documentElement.getAttribute('data-theme') === 'dark';
                const newTextColor = newIsDark ? '#e0e0e0' : '#212529';

                chartDonut.updateOptions({
                    legend: { labels: { colors: newTextColor } },
                    plotOptions: { pie: { donut: { labels: { total: { color: newTextColor } } } } }
                });

                chartBar.updateOptions({
                    xaxis: { labels: { style: { colors: newTextColor } } },
                    yaxis: { labels: { style: { colors: newTextColor } } },
                    tooltip: { theme: newIsDark ? 'dark' : 'light' }
                });
            }, 100);
        });
    }

    // --- MOCK API CONNECTION (PREPARADO PARA DRIVE) ---
    // function fetchDataFromDrive() { ... }
});
