import React from 'react'
import { Grid, LinearProgress } from '@material-ui/core'
import Datepicker from 'components/atoms/Datepicker'
import Text from 'components/atoms/Text'

const DateSelector = (props) => {
  const { onDateSelected, range } = props
  return (
    <Grid container justify='center'>

      <Grid item xs={12}>
        <Text variant="title" center className='selector-title'>
          Selecciona el periodo a mostrar
        </Text>
      </Grid>

      <Grid item xs={12} md={6}>
        <Datepicker
          onDateSelected={onDateSelected}
          range={range} />
        <LinearProgress color='primary' id="loaderLine" style={{ display: 'none' }} />
      </Grid>

    </Grid>
  )
}

export default DateSelector