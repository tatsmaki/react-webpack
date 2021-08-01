import React from 'react'

import { Input } from 'components/controls/Input'
import { Grid } from 'components/blocks/Grid'

const App = () => {
  return (
    <div className="app">
      <Input placeholder="Search" />
      <Grid />
    </div>
  )
}

export { App }
