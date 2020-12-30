import Axios from 'axios'

const axios = Axios.create({ baseURL: 'http://api.openweathermap.org/' })

const GEO_API_PATH = '/geo/1.0/direct'

/**
 * Search places (cities) by the given value
 * @param {string} filterValue 
 */
export const searchPlaces = async (filterValue) => {
  try {
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY
    const response = await axios.get(`${GEO_API_PATH}?q=${filterValue}&limit=10&appid=${apiKey}`)
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}