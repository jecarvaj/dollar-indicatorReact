import React from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const Datepicker = (props) => {
  const { onDateSelected, range } = props
  return (
    <DateRangePicker
      onChange={onDateSelected}
      value={range}
      maxDate={new Date()}
      format="dd-MM-y"
      clearIcon={null}
      calendarIcon={null}
    />
  )
}

export default Datepicker