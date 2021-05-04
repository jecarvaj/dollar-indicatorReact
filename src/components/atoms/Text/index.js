import React from 'react'
import Typography from '@material-ui/core/Typography'
import './style.scss'

const Text = (props) => {
  const { variant, children, center = false, className } = props

  const getVariant = (variant) => {
    switch (variant) {
      case 'header':
        return 'h2'
      case 'title':
        return 'h5'
      case 'subtitle':
        return 'h6'
      case 'indicator-value':
        return 'h4'
      default:
        break;
    }
  }


  return (
    <Typography variant={getVariant(variant)} align={center ? 'center' : 'inherit'} className={className}>
      {children}
    </Typography>
  )
}

export default Text