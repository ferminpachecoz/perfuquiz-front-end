"use client"

const stepLabels = ["Patrón", "Porosidad", "Cuero cabelludo", "Estado"]

export default function ProgressBar({ currentStep, totalSteps }) {
  const percentage = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="progress-bar">
      <div className="progress-bar__header">
        <span className="progress-bar__step">
          Paso {currentStep} de {totalSteps}
        </span>
        <span className="progress-bar__percentage">{percentage}%</span>
      </div>
      <div className="progress-bar__track">
        <div className="progress-bar__fill" style={{ width: `${percentage}%` }} />
      </div>
      <div className="progress-bar__labels">
        {stepLabels.map((label, index) => (
          <span
            key={index}
            className={`progress-bar__label ${
              index + 1 === currentStep ? "progress-bar__label--active" : ""
            } ${index + 1 < currentStep ? "progress-bar__label--completed" : ""}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
