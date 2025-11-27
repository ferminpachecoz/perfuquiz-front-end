"use client"

export default function RadioQuestion({ name, label, options, value, onChange, helperText }) {
  return (
    <div className="question-group">
      <label className="question-label">{label}</label>
      <div className="options-list">
        {options.map((option) => (
          <div key={option.value} className="option-item">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
            />
            <label htmlFor={`${name}-${option.value}`} className="option-label">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {helperText && <p className="helper-text">{helperText}</p>}
    </div>
  )
}
