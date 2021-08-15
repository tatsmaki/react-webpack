import React from 'react'
import { Search } from '@material-ui/icons'

const INPUT_ICONS = {
  search: <Search />,
}

const Input = (props) => {
  const {
    type = 'text',
    autocomplete = 'off',
    placeholder,
    icon,
    name,
    onChange,
  } = props

  const inputIcon = INPUT_ICONS[icon]

  const handleChange = (event) => {
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div className="input-wrapper">
      <input
        className={`input input-${type}`}
        type="text"
        name={name}
        autoComplete={autocomplete}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {icon && <span className="input-icon">{inputIcon}</span>}
    </div>
  )
}

export { Input }
