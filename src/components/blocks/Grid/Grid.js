import React, { useState } from 'react'

import { Card } from 'components/blocks/Card'
import { AddCard } from 'components/blocks/AddCard'
import { CARDS_DATA } from 'constants'

const Grid = () => {
  const [cards, setCards] = useState(CARDS_DATA)

  const handleCardShift = (card) => {
    setCards((prevState) => {
      return [card, ...prevState]
    })
  }

  return (
    <div className="grid">
      <AddCard handleCardShift={handleCardShift} />
      {cards.map((cardData) => {
        return <Card key={cardData.id}>{cardData}</Card>
      })}
    </div>
  )
}

export { Grid }
