import { Container, Grid } from '@material-ui/core'
import React from 'react'

const HomeTemplate = (props) => {
  const { header, selector, indicators } = props
  return (
    <Container >
      <Grid container justify="center" spacing={10}>
        <Grid item xs={12}>
          {header}
        </Grid>
        <Grid item xs={10} md={8}>
          {selector}
        </Grid>
        <Grid item xs={12} md={12} >
          {indicators}
        </Grid>
        
      </Grid>
    </Container>
  )
}

export default HomeTemplate
