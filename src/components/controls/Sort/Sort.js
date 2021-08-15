import React from 'react'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

const Sort = (props) => {
  const { sortBy, children, onClick } = props
  const [value, order] = sortBy.split`:`
  const newSort = children.toLowerCase()

  return (
    <span
      className="sort"
      onClick={() => onClick(`${newSort}:${order === 'asc' ? 'desc' : 'asc'}`)}
    >
      <span>{children}</span>
      {value === newSort && (order === 'asc' ? <ExpandMore /> : <ExpandLess />)}
    </span>
  )
}

export { Sort }
