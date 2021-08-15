import React from 'react'

const Button = (props) => {
  const { children, type = 'button', onClick, disabled } = props

  const handleClick = (event) => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      className="button"
      onClick={handleClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  )
}

export { Button }
