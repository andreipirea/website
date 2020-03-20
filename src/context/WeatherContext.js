import React, {useState, createContext} from 'react'

export const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
  const [weather, setWeather] = useState({
    country:undefined,
    icon:undefined,
    temperature:undefined,
    minTemp:undefined,
    maxTemp:undefined,
    description:''
    
  })

  

  


  return(
    <WeatherContext.Provider value={[weather, setWeather]}>
      {children}
    </WeatherContext.Provider>
  )
}