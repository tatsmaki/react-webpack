import React from 'react'

const CardDescription = (props) => {
  const { description } = props

  return (
    <div className="card-description">
      <span className="paragraph">{description}</span>
      <span className="read-more">Read More...</span>
    </div>
  )
}

export { CardDescription }
