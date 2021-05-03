import React from 'react'
import Typography from '@material-ui/core/Typography'

const Text = (props) => {
  const { variant, children } = props

  const getVariant = (variant) => {
    switch (variant) {
      case 'header':
        return 'h4'
      case 'title':
        return 'h5'
      case 'subtitle':
        return 'h6'
      case 'indicator-value':
        return 'h3'
      default:
        break;
    }
  }


  return (
    <Typography variant={getVariant(variant)}>
      {children}
    </Typography>
  )
}

export default Text