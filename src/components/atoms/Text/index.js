import React from 'react'
import PropTypes from "prop-types";
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
      case 'body':
        return 'body'
      default:
        return 'body'
    }
  }

  return (
    <Typography variant={getVariant(variant)} align={center ? 'center' : 'inherit'} className={className}>
      {children}
    </Typography>
  )
}


Text.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["header", "title", "subtitle", "indicator-value"]),
};

Text.defaultProps = {
  variant: "body",
};

export default Text