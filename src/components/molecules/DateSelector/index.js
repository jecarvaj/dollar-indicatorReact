import React from 'react'
import { Grid } from '@material-ui/core'
import Datepicker from 'components/atoms/Datepicker'
import Text from 'components/atoms/Text'
import './style.scss'

const DateSelector = (props) => {
  const { onDateSelected, range } = props
  return (
    <Grid container justify='center'>
      <Grid item xs={12}>
        <Text variant="title" center className='selector-title'>
          Selecciona el rango de fechas
        </Text>
      </Grid>
      <Grid item xs={6}>
        <Datepicker onDateSelected={onDateSelected} range={range} />
      </Grid>
    </Grid>
  )
}

export default DateSelector