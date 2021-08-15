import React from 'react'

const NumberInput = (props) => {
  const { name = 'number', min = -Infinity, max = Infinity } = props

  return (
    <input
      type="number"
      className="number-input"
      name={name}
      min={min}
      max={max}
      defaultValue={0}
    />
  )
}

export { NumberInput }
