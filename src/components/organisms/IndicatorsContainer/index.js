import React from 'react'
import { Grid, Box } from '@material-ui/core'
import Chart from 'components/atoms/Chart'
import IndicatorsList from 'components/molecules/IndicatorsList'

const IndicatorsContainer = (props) => {
  const { indicators, labelsChart, dataChart } = props
  return (
    <Box>
      <Grid container justify="center" spacing={5}>
        <Grid item xs={12} md={8} lg={6} >
          {<Chart labels={labelsChart} dataset={dataChart} />}
        </Grid>
        <Grid item xs={12} >
          {<IndicatorsList items={indicators} />}
        </Grid>
      </Grid>
    </Box>
  )
}

export default IndicatorsContainer
