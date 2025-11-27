"use client"

import RadioQuestion from "./RadioQuestion"

const questionsData = {
  p8: {
    label: "P8 — ¿Cómo sentís tu cuero cabelludo un día después de lavarlo?",
    options: [
      { value: "seco", label: "Tirante / seco / con picazón" },
      { value: "normal", label: "Normal, cómodo" },
      { value: "graso", label: "Graso, se pega al cuero cabelludo" },
    ],
  },
  p9: {
    label: "P9 — ¿Notás descamación (caspa)?",
    options: [
      { value: "no", label: "No" },
      { value: "caspa_blanca", label: "Sí, escamas blancas" },
      { value: "dermatitis_seborreica", label: "Sí, escamas amarillas grasosas" },
      { value: "no_se", label: "No sé / a veces" },
    ],
  },
  p10: {
    label: "P10 — ¿Tenés sensibilidad o picazón frecuente?",
    options: [
      { value: "si", label: "Sí" },
      { value: "no", label: "No" },
      { value: "ocasional", label: "Ocasional" },
    ],
  },
}

export default function StepCueroCabelludo({ formData, updateFormData }) {
  return (
    <div>
      <h2 className="step-title">Cuero cabelludo</h2>

      <RadioQuestion
        name="p8"
        label={questionsData.p8.label}
        options={questionsData.p8.options}
        value={formData.p8}
        onChange={(value) => updateFormData("p8", value)}
      />

      <RadioQuestion
        name="p9"
        label={questionsData.p9.label}
        options={questionsData.p9.options}
        value={formData.p9}
        onChange={(value) => updateFormData("p9", value)}
      />

      <RadioQuestion
        name="p10"
        label={questionsData.p10.label}
        options={questionsData.p10.options}
        value={formData.p10}
        onChange={(value) => updateFormData("p10", value)}
      />
    </div>
  )
}
