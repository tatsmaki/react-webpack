import React, { useState } from 'react'
import { Favorite } from '@material-ui/icons'

const Like = (props) => {
  const { liked, isFavorite } = props

  const [isLiked, setIsLiked] = useState(isFavorite)

  const handleClick = () => {
    setIsLiked((prevState) => !prevState)
  }

  return (
    <span className="like">
      <Favorite
        className="like-icon"
        color={isLiked ? 'secondary' : 'disabled'}
        onClick={handleClick}
      />
      <span>{liked + Number(isLiked)}</span>
    </span>
  )
}

export { Like }
