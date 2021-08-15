import React from 'react'

const Radio = (props) => {
  const { name, value, label } = props

  return (
    <span className="radio-wrapper">
      <input className="radio" type="radio" name={name} value={value} />
      <span>{label}</span>
    </span>
  )
}

export { Radio }
