import React from 'react'

import { Button } from 'components/controls/Button'

const Pagination = (props) => {
  const { page, pages, onChange } = props

  const isFirstPage = page === 1
  const isLastPage = page === pages

  const handleClick = (event) => {
    onChange(event.target.textContent)
  }

  return (
    <div className="pagination">
      {!isFirstPage && <Button onClick={handleClick}>1</Button>}
      {page - 2 > 1 && <span>...</span>}
      {page - 1 > 1 && <Button onClick={handleClick}>{page - 1}</Button>}
      <Button disabled>{page}</Button>
      {page + 1 < pages && <Button onClick={handleClick}>{page + 1}</Button>}
      {page + 2 < pages && <span>...</span>}
      {!isLastPage && <Button onClick={handleClick}>{pages}</Button>}
    </div>
  )
}

export { Pagination }
