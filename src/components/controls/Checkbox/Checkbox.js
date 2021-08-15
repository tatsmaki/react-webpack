import React, { useState } from 'react'
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons'

const Checkbox = (props) => {
  const { name, onChange } = props

  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    setIsChecked((prevState) => {
      if (onChange) {
        onChange(!prevState)
      }
      return !prevState
    })
  }

  return (
    <div className="checkbox-wrapper" onClick={handleClick}>
      <input
        className="checkbox"
        type="checkbox"
        name={name}
        checked={isChecked}
        readOnly
      />
      <span className="checkbox-icon">
        {isChecked ? <CheckBox /> : <CheckBoxOutlineBlank />}
      </span>
    </div>
  )
}

export { Checkbox }
