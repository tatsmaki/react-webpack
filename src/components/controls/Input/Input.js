import React from 'react'
import { Search } from '@material-ui/icons'

const INPUT_ICONS = {
  search: <Search />,
}

const Input = (props) => {
  const { placeholder, icon, onChange } = props
  const inputIcon = INPUT_ICONS[icon]

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
      {icon && <span className="input-icon">{inputIcon}</span>}
    </div>
  )
}

export { Input }
