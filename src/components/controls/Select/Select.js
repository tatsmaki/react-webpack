import React from 'react'

const Select = (props) => {
  const { name, options } = props

  return (
    <div className="select-wrapper">
      <select className="select" name={name}>
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
