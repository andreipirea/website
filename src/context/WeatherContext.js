import React, {useState, createContext} from 'react'

export const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
  const [weather, setWeather] = useState({
    city: undefined,
    country:undefined,
    icon:undefined,
    temperature:undefined,
    feelsLike:undefined,
    minTemp:undefined,
    maxTemp:undefined,
    humidity:undefined,
    description:''
    
  })

  return(
    <WeatherContext.Provider value={[weather, setWeather]}>
      {children}
    </WeatherContext.Provider>
  )
}