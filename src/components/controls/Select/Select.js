import React from 'react'

const Select = (props) => {
  const { name } = props

  return (
    <select className="select" name={name}>
      <option value="You">You</option>
      <option value="Kate">Kate</option>
      <option value="Ayaka">Ayaka</option>
      <option value="Kadzuha">Kadzuha</option>
    </select>
  )
}

export { Select }
