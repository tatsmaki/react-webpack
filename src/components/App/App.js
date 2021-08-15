import React, { useState, useEffect } from 'react'

import { Input } from 'components/controls/Input'
import { Pagination } from 'components/blocks/Pagination'
import { Grid } from 'components/blocks/Grid'
import { makeRequest } from 'api/makeRequest'
import { Sort } from 'components/controls/Sort'

const App = () => {
  const [search, serSearch] = useState('')
  const [page, setPage] = useState(1)
  const [sortBy, setSortBy] = useState('name:asc')
  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(async () => {
    if (isLoading) {
      const response = await makeRequest(search, page, sortBy)

      if (response.ok) {
        const json = await response.json()

        setApiData(json)
        setError(false)
      } else {
        setApiData(null)
        setError(response)
      }
      setIsLoading(false)
    }
  }, [isLoading])

  const handleSearch = (event) => {
    serSearch(event.target.value.toLowerCase())
  }

  const handleKeyDown = (event) => {
    if (event.which === 13) {
      setIsLoading(true)
    }
  }

  const handlePageChange = (newPage) => {
    setPage(newPage)
    setIsLoading(true)
  }

  const handleSortBy = (newSort) => {
    setSortBy(newSort)
    setIsLoading(true)
  }

  return (
    <div className="app" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="header">
        <Input
          type="search"
          placeholder="Search"
          icon="search"
          onChange={handleSearch}
        />
        {apiData && (
          <Pagination
            page={apiData.page}
            pages={apiData.pages}
            onChange={handlePageChange}
          />
        )}
      </div>
      {apiData && (
        <div className="grid-header">
          <Sort sortBy={sortBy} onClick={handleSortBy}>
            Name
          </Sort>
          <Sort sortBy={sortBy} onClick={handleSortBy}>
            Race
          </Sort>
          <Sort sortBy={sortBy} onClick={handleSortBy}>
            Birth
          </Sort>
          <Sort sortBy={sortBy} onClick={handleSortBy}>
            Death
          </Sort>
        </div>
      )}
      {error && (
        <span className="error">
          {error.status} {error.statusText}
        </span>
      )}
      <Grid apiData={apiData} isLoading={isLoading} />
    </div>
  )
}

export { App }
