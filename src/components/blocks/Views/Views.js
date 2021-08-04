import React from 'react'
import { Visibility } from '@material-ui/icons'

const Views = (props) => {
  const { views } = props

  return (
    <span className="views">
      <Visibility color="disabled" />
      <span>{views}</span>
    </span>
  )
}

export { Views }
