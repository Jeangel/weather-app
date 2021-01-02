import Axios from 'axios'

const axios = Axios.create({ baseURL: 'http://api.openweathermap.org/' })

const GEO_API_PATH = '/geo/1.0/direct'
const FULL_LOCATION_WEATHER_DETAILS_API_PATH = '/data/2.5/onecall'
const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY

/**
 * Search places (cities) by the given value
 * @param {string} filterValue 
 */
export const searchPlaces = async (filterValue) => {
  try {
    const params = {
      q: filterValue,
      limit: '5',
      appid: apiKey
    }
    const response = await axios.get(GEO_API_PATH, { params })
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
export const fetchFullLocationWeatherDetails = async ({ lat, lon }) => {
  try {
    const params = {
      lat,
      lon,
      units: 'metric',
      appid: apiKey,
      exclude: ['minutely', 'alerts'].join(',')
    }
    const { data } = await axios.get(FULL_LOCATION_WEATHER_DETAILS_API_PATH, { params })
    return {
      current: {
        ...data.current,
        weather: { ...data.current.weather[0], temperature: data.current.temp }
      },
      daily: data.daily.map(e => ({ daily: { ...e.weather, temperature: e.temp } }))
    }
  } catch (error) {
    console.log(error)
    return []
  }
}
