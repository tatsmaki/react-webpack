import React from 'react'

const Card = (props) => {
  const {
    children: { birth, death, name, race },
  } = props

  return (
    <div className="card">
      <span>{name}</span>
      <span>{race}</span>
      <span>{birth}</span>
      <span>{death}</span>
    </div>
  )
}

export { Card }
