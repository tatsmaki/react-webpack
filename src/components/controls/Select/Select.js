import React from 'react'

const Select = (props) => {
  const { name, options, onChange } = props

  const handleChange = (event) => {
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div className="select-wrapper">
      <select className="select" name={name} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export { Select }
