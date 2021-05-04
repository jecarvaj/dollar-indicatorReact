import React from 'react'
import { Container, Grid } from '@material-ui/core'


const HomeTemplate = (props) => {
  const { selector, indicators, footer, switchThemeButton } = props

  return (
    <Container>
      {switchThemeButton}
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={10} md={8} >
          {selector}
        </Grid>
        <Grid item xs={12} md={12} >
          {indicators}
        </Grid>

      </Grid>
      {footer}
    </Container>
  )
}

export default HomeTemplate
