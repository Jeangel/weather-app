import Axios from 'axios'

const axios = Axios.create({ baseURL: 'http://api.timezonedb.com/v2.1/get-time-zone' })

const apiKey = process.env.REACT_APP_TIMEZONE_API_KEY

/**
 * Retrieves time information for the given coordiantes
 * @param {{
 *  lat: number,
 *  lon: number
 * }} args
 */
export const getTimeDetails = async ({ lat, lon }) => {
  try {
    const response = await axios.get(`?key=${apiKey}&by=position&lat=${lat}&lng=${lon}`)
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}
