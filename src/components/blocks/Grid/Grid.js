import React from 'react'

import { Card } from 'components/blocks/Card'
import { AddCard } from 'components/blocks/AddCard'
import { CARDS_DATA } from 'constants'

const Grid = () => {
  return (
    <div className="grid">
      {CARDS_DATA.map((cardData) => {
        return <Card key={cardData.id}>{cardData}</Card>
      })}
      <AddCard />
    </div>
  )
}

export { Grid }
