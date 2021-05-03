import React from 'react'
import { Paper } from '@material-ui/core'
import Datepicker from 'components/atoms/Datepicker'
import Text from 'components/atoms/Text'

const DateSelector = (props) => {
  const { onDateSelected, range } = props
  return (
    <Paper>
      <Text variant="title">
        Selecciona el rango de fechas
      </Text>
      <Datepicker onDateSelected={onDateSelected} range={range}/>
    </Paper>
  )
}

export default DateSelector
