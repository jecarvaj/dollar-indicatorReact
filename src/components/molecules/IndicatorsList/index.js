import React from 'react'
import { Grid } from '@material-ui/core'
import IndicatorCard from 'components/atoms/IndicatorCard'

const IndicatorsList = (props) => {
  const { items = [] } = props
  return (
    <Grid container justify="center" spacing={5}>
      {items.map((item, index) => (
        <Grid key={index} item xs={12} md={3} lg={2}>
          <IndicatorCard title={item.title} value={item.value} />
        </Grid>
      ))}
    </Grid>
  )
}

export default IndicatorsList
