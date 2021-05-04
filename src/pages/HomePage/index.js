import React, { useEffect, useState } from 'react'
import DateSelector from 'components/molecules/DateSelector'
import HomeTemplate from 'components/templates/HomeTemplate'
import IndicatorsContainer from 'components/organisms/IndicatorsContainer'
import { getDollarByPeriod } from 'services/api.service'
import Footer from 'components/atoms/Footer'
import { calculateAvg, calculateMax, calculateMin, showLoader } from 'utils'

// Defino las fechas por defecto para mostrar al inicio
const TODAY = new Date()
const LASTWEEK = new Date()
LASTWEEK.setDate(TODAY.getDate() - 7)

const HomePage = () => {
  const [rangeSelected, setRangeSelected] = useState([LASTWEEK, TODAY])
  const [labelsChart, setLabelsChart] = useState([])
  const [dataChart, setDataChart] = useState([])
  const [avgValue, setAvgValue] = useState({ title: 'Promedio' })
  const [minValue, setMinValue] = useState({ title: 'Mínimo' })
  const [maxValue, setMaxValue] = useState({ title: 'Máximo' })

  const fetchDataApi = async range => {
    showLoader(true)
    const response = await getDollarByPeriod(range[0], range[1])

    if (response?.status === 200) {
      setRangeSelected(range)
      setIndicators(response.data.Dolares)
    } else {
      //TODO: falta el manejo de este error
      console.log("error en la peticion")
    }

    showLoader(false)
  }

  const setIndicators = dolaresObj => {
    //Parseo el objeto para generar un array de labels y de values
    const arrayValues = dolaresObj.map(x => parseFloat(x.Valor.replace(",", ".")))
    const arrayLabels = dolaresObj.map(x => {
      const date = new Date(x.Fecha)
      return date.toLocaleDateString()
    })

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
      footer={<Footer />}
    />
  )
}

export default HomePage
