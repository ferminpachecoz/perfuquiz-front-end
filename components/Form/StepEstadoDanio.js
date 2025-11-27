"use client"

import RadioQuestion from "./RadioQuestion"
import CheckboxQuestion from "./CheckboxQuestion"

const questionsData = {
  p11: {
    label: "P11 — ¿Tenés coloración o decoloración?",
    options: [
      { value: "no", label: "No" },
      { value: "coloracion", label: "Sí, coloración" },
      { value: "decoloracion", label: "Sí, decoloración / mechas / balayage" },
    ],
  },
  p12: {
    label: "P12 — ¿Usás herramientas de calor? (planchita, buclera, secador)",
    options: [
      { value: "casi_nunca", label: "Casi nunca" },
      { value: "uno_dos_veces_semana", label: "1–2 veces por semana" },
      { value: "tres_o_mas_veces_semana", label: "3 o más veces por semana" },
    ],
  },
  p13: {
    label: "P13 — ¿Sentís tu pelo...? (podés elegir varias)",
    options: [
      { value: "seco", label: "Seco" },
      { value: "fragil", label: "Frágil / se rompe" },
      { value: "frizz", label: "Con frizz" },
      { value: "opaco", label: "Opaco" },
      { value: "puntas_abiertas", label: "Puntas abiertas" },
      { value: "bien", label: "Bien, sin problemas importantes" },
    ],
  },
}

export default function StepEstadoDanio({ formData, updateFormData }) {
  return (
    <div>
      <h2 className="step-title">Estado y daño</h2>

      <RadioQuestion
        name="p11"
        label={questionsData.p11.label}
        options={questionsData.p11.options}
        value={formData.p11}
        onChange={(value) => updateFormData("p11", value)}
      />

      <RadioQuestion
        name="p12"
        label={questionsData.p12.label}
        options={questionsData.p12.options}
        value={formData.p12}
        onChange={(value) => updateFormData("p12", value)}
      />

      <CheckboxQuestion
        name="p13"
        label={questionsData.p13.label}
        options={questionsData.p13.options}
        values={formData.p13}
        onChange={(values) => updateFormData("p13", values)}
      />
    </div>
  )
}
