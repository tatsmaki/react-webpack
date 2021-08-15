import React from 'react'

const FormError = (props) => {
  const { isError, message } = props

  return <span className="form-error">{isError && message}</span>
}

export { FormError }
