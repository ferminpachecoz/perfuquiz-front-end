/**
 * Servicio para comunicación con el backend
 * En esta versión MVP, simula el envío de datos
 */

/**
 
/**
 * Envía el payload del formulario al backend real
 * @param {Object} payload - Objeto con las respuestas del formulario
 * @returns {Promise<Object>} - Respuesta del servidor
*/
const BACKEND_URL = "https://perfuquiz-back-production.up.railway.app/api/diagnostico"

export async function sendToBackend(payload) {
  // Log del payload para desarrollo
  console.log("=== PAYLOAD ENVIADO AL BACKEND ===")
  console.log(JSON.stringify(payload, null, 2))
  console.log("==================================")

  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    // Si el backend responde con error (400, 500, etc.)
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("Error HTTP desde backend:", errorData)
      return {
        success: false,
        error: errorData.error || "Error al comunicarse con el backend",
      }
    }

    // Parsear JSON de la respuesta
    const data = await response.json()

    console.log("=== RESPUESTA DEL BACKEND ===")
    console.log(JSON.stringify(data, null, 2))
    console.log("=============================")

    return data
  } catch (error) {
    // Error de red, CORS, backend caído, etc.
    console.error("Error en sendToBackend:", error)
    return {
      success: false,
      error: error.message || "Error de red al llamar al backend",
    }
  }
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
