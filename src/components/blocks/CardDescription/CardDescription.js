import React from 'react'

const CardDescription = (props) => {
  const { description, author, createdAt } = props

  return (
    <div className="card-description">
      <span className="paragraph">{description}</span>
      <span className="additional">
        <span className="read-more">Read More...</span>
        <span>by {author}</span>
        <span>at {createdAt}</span>
      </span>
    </div>
  )
}

export { CardDescription }
