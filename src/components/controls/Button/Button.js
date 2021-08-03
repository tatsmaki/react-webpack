import React from 'react'

const Button = (props) => {
  const { children, type = 'button', onClick } = props

  const handleClick = (event) => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button type={type} className="button" onClick={handleClick}>
      <span>{children}</span>
    </button>
  )
}

export { Button }
