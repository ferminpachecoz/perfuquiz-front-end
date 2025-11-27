"use client"

export default function CheckboxQuestion({ name, label, options, values = [], onChange }) {
  const handleChange = (optionValue) => {
    let newValues
    if (values.includes(optionValue)) {
      newValues = values.filter((v) => v !== optionValue)
    } else {
      // Si selecciona "bien", quitar las otras opciones
      if (optionValue === "bien") {
        newValues = ["bien"]
      } else {
        // Si selecciona otra opción, quitar "bien"
        newValues = [...values.filter((v) => v !== "bien"), optionValue]
      }
    }
    onChange(newValues)
  }

  return (
    <div className="question-group">
      <label className="question-label">{label}</label>
      <div className="checkbox-list">
        {options.map((option) => (
          <div key={option.value} className="checkbox-item">
            <input
              type="checkbox"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={values.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />
            <label htmlFor={`${name}-${option.value}`} className="checkbox-label">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
