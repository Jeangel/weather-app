import axios from 'axios'

const apiKey = process.env.REACT_APP_TIMEZONE_API_KEY

/**
 * Retrieves time information for the given coordinates
 * @param {{
 *  lat: number,
 *  lon: number
 * }} args
 */
export const getTimeDetails = async ({ lat, lon }) => {
  try {
    const params = {
      key: apiKey,
      by: 'position',
      lat,
      lng: lon,
      format: 'json'
    }
    const response = await axios.get('http://api.timezonedb.com/v2.1/get-time-zone', { params })
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}
