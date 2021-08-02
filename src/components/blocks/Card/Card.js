import React from 'react'

import { CardImage } from 'components/blocks/CardImage'
import { CardTitle } from 'components/blocks/CardTitle'
import { CardDescription } from 'components/blocks/CardDescription'
import { CardTags } from 'components/blocks/CardTags'
import { Like } from 'components/controls/Like'
import { Viewed } from 'components/blocks/Viewed'

const Card = (props) => {
  const {
    children: {
      image = '',
      title,
      description,
      author,
      createdAt,
      tags = [],
      isFavorite = false,
      liked = 0,
      viewed = 0,
    },
  } = props

  return (
    <div className="card">
      <CardImage image={image} />
      <div className="card-body">
        <CardTitle title={title} />
        <CardDescription
          description={description}
          author={author}
          createdAt={createdAt}
        />
        <CardTags tags={tags} />
        <div className="card-actions">
          <Like isFavorite={isFavorite} liked={liked} />
          <Viewed viewed={viewed} />
        </div>
      </div>
    </div>
  )
}

export { Card }
