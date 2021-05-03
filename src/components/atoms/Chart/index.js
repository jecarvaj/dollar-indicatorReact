import { Box } from '@material-ui/core'
import React, {useEffect, useRef} from 'react'
import { Line } from 'react-chartjs-2'

const Chart = (props) => {
  const { labels, dataset } = props
  const ref = useRef()
  const data = {
    labels,
    datasets: [
      {
        label: 'Este es el label',
        data: dataset,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)"
      }
    ]
  }

  const options = {
    responsive: true, 
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false
          }
        }
      ]
    }
  }
  useEffect(() => {
    console.log("en use efect chart")
  }, [])
  
  return (
    <Box>
      <Line ref={ref} data={data} options={options} />
    </Box>
  )
}

export default Chart
