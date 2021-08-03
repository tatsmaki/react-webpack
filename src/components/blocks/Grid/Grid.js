import React, { useState } from 'react'

import { Card } from 'components/blocks/Card'
import { AddCard } from 'components/blocks/AddCard'
import { CARDS_DATA } from 'constants'

const Grid = (props) => {
  const { search } = props

  const [cards, setCards] = useState(CARDS_DATA)

  const handleCardShift = (card) => {
    setCards((prevState) => {
      const newState = [card, ...prevState]

      localStorage.setItem('@/LS_KEY_CARDS', JSON.stringify(newState))
      return newState
    })
  }

  return (
    <div className="grid">
      <AddCard handleCardShift={handleCardShift} />
      {cards
        .filter((cardData) => cardData.title.toLowerCase().includes(search))
        .map((cardData) => {
          return <Card key={cardData.id}>{cardData}</Card>
        })}
    </div>
  )
}

export { Grid }
