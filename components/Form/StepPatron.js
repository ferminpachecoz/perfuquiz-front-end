"use client"

import RadioQuestion from "./RadioQuestion"

const questionsData = {
  p1: {
    label: "P1 — ¿Cómo describirías tu cabello naturalmente?",
    options: [
      { value: "liso", label: "Liso" },
      { value: "ondulado", label: "Ondulado" },
      { value: "rizado", label: "Rizado / con rulos" },
      { value: "muy_rizado_afro", label: "Muy rizado / afro" },
      { value: "no_seguro", label: "No estoy seguro" },
    ],
  },
  p2: {
    label: "P2 — Cuando lavas tu cabello y se seca sin peinarlo, ¿cómo queda?",
    options: [
      { value: "totalmente_lacio", label: "Totalmente lacio" },
      { value: "onda_suave", label: "Con onda suave en S" },
      { value: "ondas_definidas", label: "Con ondas definidas o rulos sueltos" },
      { value: "rulos_marcados", label: "Con rulos muy marcados" },
      { value: "rizo_muy_apretado", label: 'Con rizos muy apretados o patrón en "Z"' },
    ],
  },
  p3: {
    label: "P3 — ¿Cómo sentís el grosor de cada pelo individual?",
    options: [
      { value: "fino", label: "Fino (delgadito, se enreda fácil)" },
      { value: "medio", label: "Medio (normal)" },
      { value: "grueso", label: "Grueso (fibra fuerte, rígida)" },
    ],
  },
  p4: {
    label: "P4 — Cuando te hacés una raya en el pelo, ¿cuánto cuero cabelludo se ve?",
    options: [
      { value: "baja", label: "Se ve mucho cuero cabelludo (poca densidad)" },
      { value: "media", label: "Se ve un poco (densidad media)" },
      { value: "alta", label: "No se ve casi nada (alta densidad)" },
    ],
  },
}

export default function StepPatron({ formData, updateFormData }) {
  return (
    <div>
      <h2 className="step-title">Patrón y características básicas</h2>

      <RadioQuestion
        name="p1"
        label={questionsData.p1.label}
        options={questionsData.p1.options}
        value={formData.p1}
        onChange={(value) => updateFormData("p1", value)}
        helperText={
          formData.p1 === "no_seguro"
            ? "💡 En una futura versión te vamos a mostrar imágenes de referencia para ayudarte."
            : null
        }
      />

      <RadioQuestion
        name="p2"
        label={questionsData.p2.label}
        options={questionsData.p2.options}
        value={formData.p2}
        onChange={(value) => updateFormData("p2", value)}
      />

      <RadioQuestion
        name="p3"
        label={questionsData.p3.label}
        options={questionsData.p3.options}
        value={formData.p3}
        onChange={(value) => updateFormData("p3", value)}
      />

      <RadioQuestion
        name="p4"
        label={questionsData.p4.label}
        options={questionsData.p4.options}
        value={formData.p4}
        onChange={(value) => updateFormData("p4", value)}
      />
    </div>
  )
}
