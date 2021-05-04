import React from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'
import PropTypes from "prop-types";
import './style.scss'
import './styleCalendar.scss'

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

Datepicker.propTypes = {
  onDateSelected: PropTypes.func.isRequired,
  range: PropTypes.array
}

Datepicker.defaultProps = {
  range: [new Date(), new Date()]
}

export default Datepicker
