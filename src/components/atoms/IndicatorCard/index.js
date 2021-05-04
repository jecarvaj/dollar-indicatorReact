import { Card, CardContent, CardHeader } from '@material-ui/core'
import React from 'react'
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

export default IndicatorCard
