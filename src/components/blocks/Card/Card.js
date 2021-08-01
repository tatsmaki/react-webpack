import React from 'react'

import { CardImage } from 'components/blocks/CardImage'
import { CardTitle } from 'components/blocks/CardTitle'
import { CardDescription } from 'components/blocks/CardDescription'
import { CardTags } from 'components/blocks/CardTags'
import { Like } from 'components/controls/Like'
import { Viewed } from 'components/blocks/Viewed'

const Card = (props) => {
  const {
    children: { image, title, description, tags, liked, viewed },
  } = props

  return (
    <div className="card">
      <CardImage image={image} />
      <div className="card-body">
        <CardTitle title={title} />
        <CardDescription description={description} />
        <CardTags tags={tags} />
        <div className="card-actions">
          <Like liked={liked} />
          <Viewed viewed={viewed} />
        </div>
      </div>
    </div>
  )
}

export { Card }
