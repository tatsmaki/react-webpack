import React from 'react'

import { TODAY_DATE } from 'constants'

const DateInput = (props) => {
  const { name } = props

  return (
    <input
      className="date-input"
      type="date"
      name={name}
      defaultValue={TODAY_DATE}
    />
  )
}

export { DateInput }
