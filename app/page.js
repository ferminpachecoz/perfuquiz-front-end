"use client"
import Link from "next/link"
import { pushEvent } from "@/lib/gtm.js"

export default function Home() {
  const handleStart = () => {
    pushEvent("start_diagnostico", {
      page: "home",
      destination: "/formulario",
    })
  }
  return (
    <div className="container">
      <div className="home">
        <div className="home__hero">
          <h1 className="home__title">Descubrí tu tipo de cabello</h1>
          <p className="home__subtitle">
            Respondé algunas preguntas simples y obtené un diagnóstico personalizado para encontrar los productos
            ideales para tu cabello.
          </p>
        </div>

        <div className="home__features">
          <div className="home__feature">
            <div className="home__feature-icon">🔍</div>
            <h3 className="home__feature-title">Análisis completo</h3>
            <p className="home__feature-text">Evaluamos patrón, porosidad, cuero cabelludo y estado del cabello.</p>
          </div>

          <div className="home__feature">
            <div className="home__feature-icon">⚡</div>
            <h3 className="home__feature-title">Rápido y fácil</h3>
            <p className="home__feature-text">Solo 13 preguntas en menos de 3 minutos.</p>
          </div>

          <div className="home__feature">
            <div className="home__feature-icon">✨</div>
            <h3 className="home__feature-title">Personalizado</h3>
            <p className="home__feature-text">Recomendaciones basadas en tu tipo único de cabello.</p>
          </div>
        </div>

        <div className="home__cta">
          <Link 
            href="/formulario" 
            className="btn btn--primary btn--large"
            onClick={handleStart}
          >
            Comenzar diagnóstico
          </Link>
        </div>
      </div>
    </div>
  )
}
