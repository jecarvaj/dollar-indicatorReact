import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import IndicatorCard from 'components/atoms/IndicatorCard'

const IndicatorsList = (props) => {
  const { items = [] } = props
  return (
    <Grid container justify="center" spacing={5}>
      {items.map((item, index) => (
        <Grid key={index} item xs={12} md={3} lg={2}>
          <IndicatorCard title={item.title} value={item.value?.toString()} />
        </Grid>
      ))}
    </Grid>
  )
}

IndicatorsList.propTypes = {
  items: PropTypes.array
}

IndicatorsList.defaultProps = {
  items: []
}
export default IndicatorsList
