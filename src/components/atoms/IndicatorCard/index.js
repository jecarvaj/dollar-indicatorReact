import React from 'react'
import PropTypes from "prop-types";
import { Card, CardContent } from '@material-ui/core'
import Text from 'components/atoms/Text'
import './style.scss'

const IndicatorCard = (props) => {
  const { title, value } = props

  return (
    <Card elevation={24} className="card-indicator" >
      <CardContent>
        <span className='card-title' >{title}</span>
        <Text variant="indicator-value" center className='card-value'>{value}</Text>
      </CardContent>
    </Card>
  )
}

IndicatorCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
}

IndicatorCard.defaultProps = {
  title: '',
  value: '',
}
export default IndicatorCard
