import Axios from 'axios'

const axios = Axios.create({ baseURL: 'http://api.openweathermap.org/' })

const GEO_API_PATH = '/geo/1.0/direct'
const WEATHER_API_PATH = '/data/2.5/weather'
const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

/**
 * Search places (cities) by the given value
 * @param {string} filterValue 
 */
export const searchPlaces = async (filterValue) => {
  try {
    const response = await axios.get(`${GEO_API_PATH}?q=${filterValue}&limit=5&appid=${apiKey}`)
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}

/**
 * Retrieves weather information for the given coordinates
 * @param {{
 *  lat: number,
 *  lon: number
 * }} args
 */
export const getWeatherDetails = async ({ lat, lon }) => {
  try {
    const response = await axios.get(`${WEATHER_API_PATH}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
    return response.data
  } catch (error) {
    console.log(error)
    return {}
  }
}