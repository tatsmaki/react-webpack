import React from 'react'
import { Visibility } from '@material-ui/icons'

const Viewed = (props) => {
  const { viewed } = props

  return (
    <span className="viewed">
      <Visibility color="disabled" />
      <span>{viewed}</span>
    </span>
  )
}

export { Viewed }
