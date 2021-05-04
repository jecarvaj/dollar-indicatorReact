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

const showLoader = (show) => {
  let el = document.getElementById('loaderLine')
  show ? el.style.display = 'block' : el.style.display = 'none'
}

export {
  calculateAvg, 
  calculateMin,
  calculateMax,
  showLoader
}