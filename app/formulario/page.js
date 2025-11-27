"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ProgressBar from "../../components/Form/ProgressBar"
import StepPatron from "../../components/Form/StepPatron"
import StepPorosidad from "../../components/Form/StepPorosidad"
import StepCueroCabelludo from "../../components/Form/StepCueroCabelludo"
import StepEstadoDanio from "../../components/Form/StepEstadoDanio"
import { buildPayload, sendToBackend } from "../../services/api"

const TOTAL_STEPS = 4

// Campos requeridos por paso
const requiredFields = {
  1: ["p1", "p2", "p3", "p4"],
  2: ["p5", "p6", "p7"],
  3: ["p8", "p9", "p10"],
  4: ["p11", "p12"], // p13 es opcional
}

export default function FormularioPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState("")

  const [formData, setFormData] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: "",
    p9: "",
    p10: "",
    p11: "",
    p12: "",
    p13: [],
  })

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    setValidationError("")
  }

  const validateStep = () => {
    const fields = requiredFields[currentStep]
    for (const field of fields) {
      if (!formData[field] || formData[field] === "") {
        return false
      }
    }
    return true
  }

  const handleNext = () => {
    if (!validateStep()) {
      setValidationError("Por favor, respondé todas las preguntas antes de continuar.")
      return
    }
    setValidationError("")
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePrev = () => {
    setValidationError("")
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async () => {
    if (!validateStep()) {
      setValidationError("Por favor, respondé todas las preguntas obligatorias.")
      return
    }

    setIsSubmitting(true)

    try {
      const payload = buildPayload(formData)
      const response = await sendToBackend(payload)

      // Guardar en sessionStorage para la página de resultado
      sessionStorage.setItem("diagnosticoPayload", JSON.stringify(payload))
      sessionStorage.setItem("diagnosticoResponse", JSON.stringify(response))

      router.push("/resultado")
    } catch (error) {
      console.error("Error al enviar:", error)
      setValidationError("Hubo un error al procesar tu diagnóstico. Por favor, intentá de nuevo.")
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepPatron formData={formData} updateFormData={updateFormData} />
      case 2:
        return <StepPorosidad formData={formData} updateFormData={updateFormData} />
      case 3:
        return <StepCueroCabelludo formData={formData} updateFormData={updateFormData} />
      case 4:
        return <StepEstadoDanio formData={formData} updateFormData={updateFormData} />
      default:
        return null
    }
  }

  if (isSubmitting) {
    return (
      <div className="container">
        <div className="form-container">
          <div className="loading">
            <div className="loading__spinner" />
            <p className="loading__text">Procesando tu diagnóstico...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="form-container">
        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        {renderStep()}

        {validationError && <p className="validation-error">{validationError}</p>}

        <div className="form-navigation">
          {currentStep > 1 && (
            <button type="button" className="btn btn--secondary" onClick={handlePrev}>
              Anterior
            </button>
          )}

          {currentStep < TOTAL_STEPS ? (
            <button type="button" className="btn btn--primary" onClick={handleNext}>
              Siguiente
            </button>
          ) : (
            <button type="button" className="btn btn--primary" onClick={handleSubmit}>
              Finalizar diagnóstico
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
