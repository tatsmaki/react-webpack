import React from 'react'

const Card = (props) => {
  const {
    children: { birth, death, name, race },
  } = props

  return (
    <div className="card">
      <span>{name}</span>
      <span>{race !== 'NaN' && race}</span>
      <span>{birth !== 'NaN' && birth.replace(/ ,|, /g, ' ')}</span>
      <span>{death !== 'NaN' && death.replace(/ ,|, /g, ' ')}</span>
    </div>
  )
}

export { Card }
