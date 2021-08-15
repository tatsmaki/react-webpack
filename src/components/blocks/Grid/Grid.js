import React from 'react'
import { Loop } from '@material-ui/icons'

import { Card } from 'components/blocks/Card'

const Grid = (props) => {
  const { apiData, isLoading } = props

  return (
    <div className="grid">
      {isLoading && (
        <div className="loading">
          <Loop fontSize="large" />
        </div>
      )}
      {apiData?.docs.map((cardData) => {
        const { _id } = cardData

        return <Card key={_id}>{cardData}</Card>
      })}
    </div>
  )
}

export { Grid }
