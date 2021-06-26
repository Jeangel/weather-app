import React from 'react'
import { WiFog, WiDaySunny, WiSnow, WiRain, WiCloud } from 'react-icons/all'

/**
 * Icon that describes the given weather type
 * @param {{
  *  type: string,
  *  size: number
  * }} props
  */
 export const WeatherIcon = ({ type = '', size }) => {
   const props = { size, color: 'white' }
   switch (type) {
     case 'Clear':
       return <WiDaySunny {...props} />
     case 'Clouds':
       return <WiCloud {...props} />
     case 'Rain':
     case 'Drizzle':
       return <WiRain {...props} />
     case 'Snow':
       return <WiSnow {...props} />
     case 'Mist':
     case 'Fog':
       return <WiFog {...props} />
     default:
       return <React.Fragment />
   }
 }
 