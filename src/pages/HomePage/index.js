import React, { useEffect, useState } from 'react'
import DateSelector from 'components/molecules/DateSelector'
import HomeTemplate from 'components/templates/HomeTemplate'
import IndicatorsContainer from 'components/organisms/IndicatorsContainer'
import { getDollarByPeriod } from 'services/api.service'

const TODAY = new Date()
const LASTWEEK = new Date()
LASTWEEK.setDate(TODAY.getDate() - 7)

const calculateAvg = values => {
  const sum = values.reduce((a, b) => a + b, 0)
  const avg = sum / values.length
  return (Math.round(avg * 100) / 100).toFixed(2)
}

const calculateMin = values => {
  return Math.min(...values)
}

const calculateMax = values => {
  return Math.max(...values)
}

const HomePage = () => {
  const [rangeSelected, setRangeSelected] = useState([LASTWEEK, TODAY])
  const [labelsChart, setLabelsChart] = useState([])
  const [dataChart, setDataChart] = useState([])
  const [avgValue, setAvgValue] = useState({ title: 'Promedio' })
  const [minValue, setMinValue] = useState({ title: 'Mínimo' })
  const [maxValue, setMaxValue] = useState({ title: 'Máximo' })

  const fetchDataApi = async range => {
    //TODO: FALta el loader
    console.log("Is Loading")
    const response = await getDollarByPeriod(range[0], range[1])
    setRangeSelected(range)

    if (response?.status === 200) {
      setIndicators(response.data.Dolares)
    } else {
      //TODO: falta el manejo de este error
      console.log("error en la peticion")
    }

    console.log("FINALIZA LOADING")
  }

  const setIndicators = dolaresObj => {
    const arrayValues = dolaresObj.map(x => parseFloat(x.Valor.replace(",", ".")))
    const arrayLabels = dolaresObj.map(x => x.Fecha)

    setLabelsChart(arrayLabels)
    setDataChart(arrayValues)
    setAvgValue({ ...avgValue, value: calculateAvg(arrayValues) })
    setMinValue({ ...minValue, value: calculateMin(arrayValues) })
    setMaxValue({ ...maxValue, value: calculateMax(arrayValues) })
  }


  useEffect(() => {
    fetchDataApi(rangeSelected)
  }, [])

  return (
    <HomeTemplate
      // header = {}
      selector={
        <DateSelector onDateSelected={fetchDataApi} range={rangeSelected} />
      }
      indicators={
        <IndicatorsContainer
          indicators={[minValue, avgValue, maxValue]}
          labelsChart={labelsChart}
          dataChart={dataChart}
        />
      }
    />
  )
}

export default HomePage
