import React from 'react'

import { Input } from 'components/controls/Input'
import { Grid } from 'components/blocks/Grid'

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <Input placeholder="Search" icon="search" />
      </div>
      <Grid />
    </div>
  )
}

export { App }
