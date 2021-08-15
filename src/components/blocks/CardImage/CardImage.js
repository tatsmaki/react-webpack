import React from 'react'

import { DEFAULT_IMAGE } from 'constants'

const CardImage = (props) => {
  const { image } = props

  return <img className="card-image" src={image || DEFAULT_IMAGE} alt="card" />
}

export { CardImage }
