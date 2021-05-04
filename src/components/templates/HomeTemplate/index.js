import { Container, Grid, Box } from '@material-ui/core'
import React from 'react'
import './style.scss'


const HomeTemplate = (props) => {
  const { header, selector, indicators, footer } = props
  return (
    <React.Fragment>

    <Box component={Container}>
      <Grid container justify="center" spacing={0} direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>
       {/*  <Grid item xs={12}>
          {header}
        </Grid> */}
        <Grid item xs={10} md={8} >
          {selector}
        </Grid>
        <Grid item xs={12} md={12} >
          {indicators}
        </Grid>
        
      </Grid>
      {footer}
    </Box>
        </React.Fragment>
  )
}

export default HomeTemplate
