import axios from "axios"

const axiosInstance = axios.create({
	baseURL: "https://api.sbif.cl/api-sbifv3/recursos_api/dolar/",
	timeout: 1500
})

const API_KEY = process.env.REACT_APP_API_KEY_SBIF

const getDollarByPeriod = (initialDate = new Date(), finalDate = new Date()) => {
	const initYear = initialDate.getFullYear()
	const initMonth = initialDate.getMonth() + 1
	const initDay = initialDate.getDate()

	const finalYear = finalDate.getFullYear()
	const finalMonth = finalDate.getMonth() + 1
	const finalDay = finalDate.getDate()

	const URL = `periodo/${initYear}/${initMonth}/dias_i/${initDay}/${finalYear}/${finalMonth}/dias_f/${finalDay}?apikey=${API_KEY}&formato=json`

	return axiosInstance.get(URL).catch(error => error)
}

export { getDollarByPeriod }
