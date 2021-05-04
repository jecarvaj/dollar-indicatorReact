import React from 'react'
import { Box, Paper } from '@material-ui/core'
import {Line} from 'react-chartjs-2'
import PropTypes from "prop-types";
import './style.scss'

/*
 * VERSION DE CHARTJS NO COMPATIBLE, NO FUNCIONAN LAS OPCIONES
 * por eso no las agrego, me di cuenta al terminar
 */

const ChartComponent = (props) => {
  const { labels, dataset, dataLabel } = props

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

  return (
    <Box component={Paper} className='chart-container'>
      <Line data={data}  />
    </Box>
  )
}

ChartComponent.propTypes = {
  labels: PropTypes.array.isRequired,
  dataset: PropTypes.array.isRequired,
  dataLabel: PropTypes.string,
}

ChartComponent.defaultProps = {
  dataLabel: ""
}

export default ChartComponent
