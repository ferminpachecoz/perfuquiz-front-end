"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { pushEvent } from "@/lib/gtm.js"

function prettyLabel(value) {
  if (!value || typeof value !== "string") return "N/D"
  return value.replaceAll("_", " ")
}

function capitalize(str) {
  if (!str || typeof str !== "string") return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function takeFirst(arr, n) {
  if (!Array.isArray(arr)) return []
  return arr.slice(0, n)
}

export default function ResultadoPage() {
  const router = useRouter()

  const [backendResponse, setBackendResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleClickEcommerce = () => {
    pushEvent("click_ver_productos_recomendados", {
      page: "resultado",
      outbound: true,
      destination: "https://www.perfuchic.com.ar",
    })
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    const storedResponse = window.sessionStorage.getItem("diagnosticoResponse")

    if (!storedResponse) {
      router.push("/formulario")
      return
    }

    try {
      setBackendResponse(JSON.parse(storedResponse))
      setIsLoading(false)
    } catch (error) {
      console.error("Error leyendo sessionStorage:", error)
      router.push("/formulario")
    }
  }, [router])

  const handleRestart = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("diagnosticoPayload")
      window.sessionStorage.removeItem("diagnosticoResponse")
    }
    router.push("/formulario")
  }

  const data = backendResponse?.data || {}
  const perfilTecnico = data.perfilTecnico || {}
  const prioridades = data.prioridades || []
  const diagnosticoIA = data.diagnosticoIA || {}
  const texto = diagnosticoIA.texto_para_usuario || {}

  const problemas = diagnosticoIA.problemas_principales || []
  const ingredientes = diagnosticoIA.ingredientes_recomendados || {}

  const ingredientesCompactos = useMemo(() => {
    // mostramos pocos por categoría para que sea corto
    const limpieza = takeFirst(ingredientes.limpieza, 3)
    const hidratacion = takeFirst(ingredientes.hidratacion, 3)
    const reparacion = takeFirst(ingredientes.nutricion_y_reparacion, 3)
    const proteccion = takeFirst(ingredientes.proteccion, 3)

    return { limpieza, hidratacion, reparacion, proteccion }
  }, [ingredientes])

  const resumenRapido = useMemo(() => {
    const patron = perfilTecnico.patron?.tipo
    const grosor = perfilTecnico.grosor
    const densidad = perfilTecnico.densidad
    const porosidad = perfilTecnico.porosidad
    const cuero = perfilTecnico.cueroCabelludo?.tipo
    const caspa = perfilTecnico.cueroCabelludo?.caspa

    const partes = [
      patron ? `Patrón: ${prettyLabel(patron)}` : null,
      grosor ? `Grosor: ${prettyLabel(grosor)}` : null,
      densidad ? `Densidad: ${prettyLabel(densidad)}` : null,
      porosidad ? `Porosidad: ${prettyLabel(porosidad)}` : null,
      cuero ? `Cuero cabelludo: ${prettyLabel(cuero)}` : null,
      caspa && caspa !== "ninguna" ? `Caspa: ${prettyLabel(caspa)}` : null,
    ].filter(Boolean)

    return partes.slice(0, 4) // lo hacemos corto
  }, [perfilTecnico])

  if (isLoading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="loading__spinner" />
          <p className="loading__text">Cargando diagnóstico...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="resultado">
        <div className="resultado__card">
          {/* Título y resumen cortito */}
          <h1 className="resultado__title">
            {texto.titulo || "Tu diagnóstico capilar está listo"}
          </h1>

          <p className="resultado__subtitle" style={{ marginBottom: "0.75rem" }}>
            {diagnosticoIA.resumen_tipo_cabello ||
              "Este es el resumen de tu diagnóstico capilar."}
          </p>

          {/* Resumen rápido en bullets (corto) */}
          {resumenRapido.length > 0 && (
            <ul className="resultado__list" style={{ marginTop: 0 }}>
              {resumenRapido.map((linea) => (
                <li key={linea}>{capitalize(linea)}</li>
              ))}
            </ul>
          )}

          {/* Texto 1 solo (evitamos pared de texto) */}
          {texto.parrafo_1 && (
            <p className="resultado__texto" style={{ marginTop: "0.75rem" }}>
              {texto.parrafo_1}
            </p>
          )}

          {/* Problemas + Prioridades (compacto) */}
          <section className="resultado__section" style={{ marginTop: "1rem" }}>
            <h2 className="resultado__section-title">Lo más importante</h2>

            <div style={{ display: "grid", gap: "0.75rem" }}>
              {problemas.length > 0 && (
                <div>
                  <strong>Problemas principales</strong>
                  <ul className="resultado__list" style={{ marginTop: "0.35rem" }}>
                    {takeFirst(problemas, 3).map((p) => (
                      <li key={p}>{capitalize(p)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {prioridades.length > 0 && (
                <div>
                  <strong>Prioridad de tratamiento</strong>
                  <ul className="resultado__list" style={{ marginTop: "0.35rem" }}>
                    {takeFirst(prioridades, 3).map((p) => (
                      <li key={p}>{prettyLabel(p)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Ingredientes (compacto) */}
          {ingredientes && (
            <section className="resultado__section">
              <h2 className="resultado__section-title">Ingredientes recomendados</h2>

              <div style={{ display: "grid", gap: "0.75rem" }}>
                {ingredientesCompactos.limpieza?.length > 0 && (
                  <div>
                    <strong>Limpieza</strong>
                    <p className="resultado__texto" style={{ marginTop: "0.25rem" }}>
                      {ingredientesCompactos.limpieza.join(" • ")}
                    </p>
                  </div>
                )}

                {ingredientesCompactos.hidratacion?.length > 0 && (
                  <div>
                    <strong>Hidratación</strong>
                    <p className="resultado__texto" style={{ marginTop: "0.25rem" }}>
                      {ingredientesCompactos.hidratacion.join(" • ")}
                    </p>
                  </div>
                )}

                {ingredientesCompactos.reparacion?.length > 0 && (
                  <div>
                    <strong>Nutrición / reparación</strong>
                    <p className="resultado__texto" style={{ marginTop: "0.25rem" }}>
                      {ingredientesCompactos.reparacion.join(" • ")}
                    </p>
                  </div>
                )}

                {ingredientesCompactos.proteccion?.length > 0 && (
                  <div>
                    <strong>Protección</strong>
                    <p className="resultado__texto" style={{ marginTop: "0.25rem" }}>
                      {ingredientesCompactos.proteccion.join(" • ")}
                    </p>
                  </div>
                )}
              </div>

              <p className="resultado__subtitle" style={{ marginTop: "0.75rem" }}>
                *Sugerencias generales. Si tenés irritación persistente o picazón fuerte, lo ideal es consultar con un dermatólogo.
              </p>
            </section>
          )}

          {/* Detalles (plegable) para que no sea eterno */}
          <details style={{ marginTop: "1rem" }}>
            <summary style={{ cursor: "pointer", fontWeight: 600 }}>
              Ver detalles del diagnóstico
            </summary>

            {/* Descripción completa (larga) */}
            {diagnosticoIA.descripcion_detallada && (
              <section className="resultado__section" style={{ marginTop: "0.75rem" }}>
                <h2 className="resultado__section-title">Explicación completa</h2>
                <p className="resultado__texto">{diagnosticoIA.descripcion_detallada}</p>
                {texto.parrafo_2 && <p className="resultado__texto">{texto.parrafo_2}</p>}
                {texto.parrafo_3 && <p className="resultado__texto">{texto.parrafo_3}</p>}
              </section>
            )}

            {/* Perfil técnico completo */}
            <section className="resultado__section">
              <h2 className="resultado__section-title">Perfil técnico</h2>
              <ul className="resultado__list">
                <li>
                  <strong>Patrón:</strong> {prettyLabel(perfilTecnico.patron?.tipo)}
                </li>
                <li>
                  <strong>Grosor:</strong> {prettyLabel(perfilTecnico.grosor)}
                </li>
                <li>
                  <strong>Densidad:</strong> {prettyLabel(perfilTecnico.densidad)}
                </li>
                <li>
                  <strong>Porosidad:</strong> {prettyLabel(perfilTecnico.porosidad)}
                </li>
                <li>
                  <strong>Cuero cabelludo:</strong>{" "}
                  {prettyLabel(perfilTecnico.cueroCabelludo?.tipo)}
                </li>
                {perfilTecnico.cueroCabelludo?.caspa &&
                  perfilTecnico.cueroCabelludo.caspa !== "ninguna" && (
                    <li>
                      <strong>Caspa:</strong> {prettyLabel(perfilTecnico.cueroCabelludo.caspa)}
                    </li>
                  )}
                <li>
                  <strong>Daño químico:</strong>{" "}
                  {prettyLabel(perfilTecnico.estadoCabello?.danioQuimico)}
                </li>
                <li>
                  <strong>Daño térmico:</strong>{" "}
                  {prettyLabel(perfilTecnico.estadoCabello?.danioTermico)}
                </li>
              </ul>
            </section>
          </details>
          
          <p className="resultado__subtitle" style={{ marginTop: "1.25rem" }}>
            Encontrá productos pensados para las necesidades reales de tu cabello.
          </p>

          {/* Acciones */}
          <div className="resultado__actions">
            <a
              href="https://www.perfuchic.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--cta"
              onClick={handleClickEcommerce}
            >
              Ver productos recomendados para mi cabello
            </a>

            <button
              type="button"
              className="btn btn--secondary"
              onClick={handleRestart}
            >
              Hacer otro diagnóstico
            </button>

            <Link href="/" className="btn btn--ghost">
              Volver al inicio
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
