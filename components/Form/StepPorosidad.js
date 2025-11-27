"use client"

import RadioQuestion from "./RadioQuestion"

const questionsData = {
  p5: {
    label: "P5 — ¿Qué tan rápido se moja tu cabello bajo la ducha?",
    options: [
      { value: "tarda_bastante", label: "Tarda bastante en mojarse" },
      { value: "normal", label: "Se moja normalmente" },
      { value: "instantaneo", label: "Se moja al instante" },
    ],
  },
  p6: {
    label: "P6 — ¿Tu cabello se seca rápido o lento?",
    options: [
      { value: "muy_lento", label: "Muy lento (más de lo normal)" },
      { value: "normal", label: "Normal" },
      { value: "muy_rapido", label: "Muy rápido" },
    ],
  },
  p7: {
    label: "P7 — ¿Cómo reacciona tu cabello a los productos?",
    options: [
      { value: "repelen", label: 'Siento que "repelen" el producto / no absorbe fácil' },
      { value: "absorbe_bien", label: "Absorbe bien" },
      { value: "absorbe_pero_sigue_seco", label: "Absorbe mucho, pero sigue seco" },
    ],
  },
}

export default function StepPorosidad({ formData, updateFormData }) {
  return (
    <div>
      <h2 className="step-title">Porosidad del cabello</h2>
      <p className="helper-text" style={{ marginBottom: "1.5rem", fontStyle: "normal" }}>
        La porosidad indica qué tan fácil tu pelo absorbe y pierde agua/producto.
      </p>

      <RadioQuestion
        name="p5"
        label={questionsData.p5.label}
        options={questionsData.p5.options}
        value={formData.p5}
        onChange={(value) => updateFormData("p5", value)}
      />

      <RadioQuestion
        name="p6"
        label={questionsData.p6.label}
        options={questionsData.p6.options}
        value={formData.p6}
        onChange={(value) => updateFormData("p6", value)}
      />

      <RadioQuestion
        name="p7"
        label={questionsData.p7.label}
        options={questionsData.p7.options}
        value={formData.p7}
        onChange={(value) => updateFormData("p7", value)}
      />
    </div>
  )
}
