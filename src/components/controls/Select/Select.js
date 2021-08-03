import React from 'react'

const Select = (props) => {
  const { name } = props

  return (
    <div className="select-wrapper">
      <select className="select" name={name}>
        <option value="You">You</option>
        <option value="Kate">Kate</option>
        <option value="Ayaka">Ayaka</option>
        <option value="Kadzuha">Kadzuha</option>
      </select>
    </div>
  )
}

export { Select }
