import React from 'react'
import { Box, Grid, Paper } from '@material-ui/core'
import ChartComponent from 'components/atoms/Chart'
import IndicatorsList from 'components/molecules/IndicatorsList'
import './style.scss'

const IndicatorsContainer = (props) => {
  const { indicators, labelsChart, dataChart } = props
  return (
    <Box component={Paper} elevation={24} bgcolor='#11281975'  >
      <Grid container justify="center" spacing={2} className='indicators-container'>
        <Grid item xs={12} md={8} lg={7} >
          {<ChartComponent labels={labelsChart} dataset={dataChart} dataLabel='Variación del dolar' />}
        </Grid>
        <Grid item xs={12} >
          <IndicatorsList items={indicators} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default IndicatorsContainer
