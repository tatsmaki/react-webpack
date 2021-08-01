import React from 'react'

import { CardImage } from 'components/blocks/CardImage'
import { CardTitle } from 'components/blocks/CardTitle'

const Card = (props) => {
  const {
    children: { image, title },
  } = props

  return (
    <div className="card">
      <CardImage image={image} />
      <CardTitle title={title} />
    </div>
  )
}

export { Card }
