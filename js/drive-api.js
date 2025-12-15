// Google Drive / Sheets API Interactor
// Permite conectar el Dashboard de 'admin.html' con una Hoja de Cálculo en vivo.

const DRIVE_CONFIG = {
    // ID público de la hoja (File -> Share -> Publish to Web -> CSV)
    sheetId: '',
    // Mapeo de columnas esperadas (A=0, B=1, etc)
    columns: {
        ticket: 0,
        sucursal: 1,
        estatus: 2,
        fecha: 3
    }
};

/**
 * Obtiene datos desde un CSV publicado en Google Sheets
 * @returns {Promise<Array>} Lista de objetos con los datos
 */
async function fetchSheetData() {
    if (!DRIVE_CONFIG.sheetId) {
        console.warn('SGI Drive: No Sheet ID configured.');
        return [];
    }

    const url = `https://docs.google.com/spreadsheets/d/${DRIVE_CONFIG.sheetId}/pub?output=csv`;

    try {
        const response = await fetch(url);
        const text = await response.text();
        return parseCSV(text);
    } catch (error) {
        console.error('SGI Drive Error:', error);
        return [];
    }
}

function parseCSV(csvText) {
    const rows = csvText.split('\n').slice(1); // Ignorar header
    return rows.map(row => {
        const cols = row.split(',');
        return {
            ticket: cols[DRIVE_CONFIG.columns.ticket],
            sucursal: cols[DRIVE_CONFIG.columns.sucursal],
            estatus: cols[DRIVE_CONFIG.columns.estatus],
            fecha: cols[DRIVE_CONFIG.columns.fecha]
        };
    });
}

// Uso futuro en charts.js:
// fetchSheetData().then(data => updateCharts(data));
