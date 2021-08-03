import React, { useState } from 'react'

import { Input } from 'components/controls/Input'
import { Grid } from 'components/blocks/Grid'

const App = () => {
  const [search, serSearch] = useState('')

  const handleSearch = (event) => {
    serSearch(event.target.value.toLowerCase())
  }

  return (
    <div className="app">
      <div className="header">
        <Input
          type="search"
          placeholder="Search"
          icon="search"
          onChange={handleSearch}
        />
      </div>
      <Grid search={search} />
    </div>
  )
}

export { App }
