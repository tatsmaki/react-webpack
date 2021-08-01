import React from 'react'

const Input = (props) => {
  const { onChange, placeholder } = props

  const handleChange = (event) => {
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div className="input-wrapper">
      <input
        className="input"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export { Input }
