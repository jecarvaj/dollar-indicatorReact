import React, {useEffect} from 'react'
import { Box, Paper } from '@material-ui/core'
import {Line} from 'react-chartjs-2'

const ChartComponent = (props) => {
  const { labels=[], dataset=[], dataLabel="" } = props

  const data = {
    labels,
    datasets: [
      {
        label: dataLabel,
        data: dataset,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)"
      }
    ]
  }

  useEffect(() => {
    console.log("en use efect chart")
  }, [])
  
  return (
    <Box component={Paper} px={4} py={2}>
      <Line data={data}  />
    </Box>
  )
}

export default ChartComponent
