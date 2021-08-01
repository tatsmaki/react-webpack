import React from 'react'

const CardTags = (props) => {
  const { tags } = props

  return (
    <div className="card-tags">
      {tags.map((tag) => {
        return (
          <span key={tag} className={`card-tag ${tag.toLowerCase()}`}>
            {tag}
          </span>
        )
      })}
    </div>
  )
}

export { CardTags }
