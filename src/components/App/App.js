import React, { useState, useEffect } from 'react'

import { Input } from 'components/controls/Input'
import { Pagination } from 'components/blocks/Pagination'
import { Grid } from 'components/blocks/Grid'
import { makeRequest } from 'api/makeRequest'

const App = () => {
  const [search, serSearch] = useState('')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState(null)

  useEffect(async () => {
    if (isLoading) {
      const response = await makeRequest(search, page)

      if (response) {
        console.log(response)
        setApiData(response)
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
      <Grid apiData={apiData} isLoading={isLoading} />
    </div>
  )
}

export { App }
