"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ResultadoPage() {
  const router = useRouter()
  const [payload, setPayload] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedPayload = sessionStorage.getItem("diagnosticoPayload")

    if (!storedPayload) {
      router.push("/formulario")
      return
    }

    setPayload(JSON.parse(storedPayload))
    setIsLoading(false)
  }, [router])

  const handleRestart = () => {
    sessionStorage.removeItem("diagnosticoPayload")
    sessionStorage.removeItem("diagnosticoResponse")
    router.push("/formulario")
  }

  if (isLoading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="loading__spinner" />
          <p className="loading__text">Cargando resultados...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="resultado">
        <div className="resultado__card">
          <div className="resultado__icon">✅</div>
          <h1 className="resultado__title">¡Diagnóstico completado!</h1>
          <p className="resultado__message">
            Gracias por completar el diagnóstico. Vamos a usar tus respuestas para crear un análisis personalizado de tu
            cabello y recomendarte los mejores productos para tu rutina.
          </p>

          <div className="resultado__actions">
            <button type="button" className="btn btn--secondary" onClick={handleRestart}>
              Hacer otro diagnóstico
            </button>
            <Link href="/" className="btn btn--primary">
              Volver al inicio
            </Link>
          </div>
        </div>

        {/* Debug Section - Solo para desarrollo */}
        <div className="resultado__debug">
          <div className="resultado__debug-header">
            <span className="resultado__debug-title">📋 Payload para Backend</span>
            <span className="resultado__debug-badge">Modo desarrollo</span>
          </div>
          <div className="resultado__debug-content">
            <pre>{JSON.stringify(payload, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
