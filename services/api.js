/**
 * Servicio para comunicación con el backend
 * En esta versión MVP, simula el envío de datos
 */

/**
 * Envía el payload del formulario al backend
 * @param {Object} payload - Objeto con las respuestas del formulario
 * @returns {Promise<Object>} - Respuesta simulada del servidor
 */
export async function sendToBackend(payload) {
  // Log del payload para desarrollo
  console.log("=== PAYLOAD ENVIADO AL BACKEND ===")
  console.log(JSON.stringify(payload, null, 2))
  console.log("==================================")

  // Simular latencia de red
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Diagnóstico recibido correctamente",
        timestamp: new Date().toISOString(),
        payload: payload,
      })
    }, 1500)
  })
}

/**
 * Construye el objeto de respuestas en el formato requerido
 * @param {Object} formData - Datos crudos del formulario
 * @returns {Object} - Payload formateado
 */
export function buildPayload(formData) {
  return {
    formVersion: "1.0",
    rawAnswers: {
      p1_patron_general: formData.p1 || null,
      p2_patron_secado: formData.p2 || null,
      p3_grosor: formData.p3 || null,
      p4_densidad: formData.p4 || null,
      p5_mojado_rapidez: formData.p5 || null,
      p6_secado_rapidez: formData.p6 || null,
      p7_reaccion_productos: formData.p7 || null,
      p8_cuero_cabelludo: formData.p8 || null,
      p9_caspa: formData.p9 || null,
      p10_sensibilidad: formData.p10 || null,
      p11_color_deco: formData.p11 || null,
      p12_calor: formData.p12 || null,
      p13_estado: formData.p13 || [],
    },
  }
}
