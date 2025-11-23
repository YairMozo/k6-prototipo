import http from 'k6/http';
import { sleep } from 'k6' ;

// Configuración de la prueba
export const options = {
  vus: 10,            // usuarios virtuales
  duration: '10s',    // duración total
};

// Ejecución principal
export default function () {
  http.get('https://test.k6.io/');  // Endpoint de prueba
  sleep(1);
}

// Generación del reporte HTML mejorado
export function handleSummary(data) {
  const html = `
  <html>
  <head>
    <title>Reporte de Pruebas k6</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
      h1 { color: #222; }
      h2 { color: #444; }
      .box { background: white; padding: 15px; margin-bottom: 20px; border-radius: 8px;
             box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
      pre { background: #eee; padding: 10px; border-radius: 5px; }
    </style>
  </head>
  <body>

    <h1>📊 Reporte de Pruebas de Carga – k6</h1>

    <div class="box">
      <h2>📌 Resumen General</h2>
      <pre>${JSON.stringify(data.root_group, null, 2)}</pre>
    </div>

    <div class="box">
      <h2>📈 Métricas</h2>
      <pre>${JSON.stringify(data.metrics, null, 2)}</pre>
    </div>

    <div class="box">
      <h2>📝 Información de la prueba</h2>
      <ul>
        <li><b>Usuarios simultáneos:</b> ${options.vus}</li>
        <li><b>Duración:</b> ${options.duration}</li>
        <li><b>Endpoint probado:</b> https://test.k6.io/</li>
      </ul>
    </div>

    <div class="box">
      <h2>💡 Interpretación básica</h2>
      <p>Este reporte fue generado automáticamente por k6. Incluye métricas clave como tiempos de respuesta,
      número de solicitudes exitosas, errores, percentiles de latencia y más. Este archivo HTML es ideal para
      ser incluido como evidencia en informes o actividades académicas.</p>
    </div>

  </body>
  </html>
  `;

  return {
    "reporte_k6.html": html,
  };
}
