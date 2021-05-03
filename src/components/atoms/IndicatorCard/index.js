import { Paper } from '@material-ui/core'
import React from 'react'
import Text from 'components/atoms/Text'
import 'components/atoms/IndicatorCard/style.scss'

const IndicatorCard = (props) => {
  const { title, value } = props

  return (
    <Paper elevation={5} className="card-indicator">
        <Text variant="subtitle">{title}</Text>
        <Text variant="indicator-value">{value}</Text>
    </Paper>
  )
}

export default IndicatorCard
