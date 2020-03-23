import React, {useEffect, useContext, useState} from 'react'
import './Weather.scss'
import 'weather-icons/css/weather-icons.css'
import {WeatherContext} from '../../context/WeatherContext'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NavBar from '../navbarTM/Navbar'
import Footer from '../Footer/Footer'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const apiKey = 'd33e8f459c65aabc5d0bbd2b6440a42e'





const Weather = () => {
  const classes = useStyles();
  const [weather, setWeather] = useContext(WeatherContext)
  const [city, setCity] = useState('')

  const weatherIcon = {
    Thunderstorm: 'wi-thunderstorm',
    Drizzle: 'wi-sleet',
    Rain: 'wi-storm-showers',
    Snow: 'wi-snow',
    Atmosphere: 'wi-fog',
    Clear: 'wi-day-sunny',
    Clounds: 'wi-day-fog'
  }
  
  const getWeatherId = (rangeId) => {
    switch(true){
      case rangeId >= 200 && rangeId <= 232:
        return weatherIcon.Thunderstorm
        break
      case rangeId >= 300 && rangeId <= 321:
        return weatherIcon.Drizzle
        break
      case rangeId >= 500 && rangeId <= 531:
        return weatherIcon.Rain
        break
      case rangeId >= 600 && rangeId <= 622:
        return weatherIcon.Snow
        break
      case rangeId >= 701 && rangeId <= 781:
        return weatherIcon.Atmosphere
        break
      case rangeId === 800:
        return weatherIcon.Clear
        break
      case rangeId >= 801 && rangeId <= 804:
        return weatherIcon.Clounds
        break
      default:
        return weatherIcon.Clear
    }
  }
  

  useEffect(()  => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=${apiKey}`)
      .then(response => {
        console.log('searched city', response)
        setWeather({
          ...weather,
          city:response.data.name,
          country: response.data.sys.country,
          icon: getWeatherId(response.data.weather[0].id),
          temperature: calcCelsius(response.data.main.temp),
          feelsLike: calcCelsius(response.data.main.feels_like),
          maxTemp: calcCelsius(response.data.main.temp_max),
          minTemp: calcCelsius(response.data.main.temp_min),
          humidity: response.data.main.humidity,
          description: response.data.weather[0].main
        })
      })
      .catch(err => {
        console.log('error', err)
      })
  }, [])

  

   const calcCelsius = temp => {
     let celsius = Math.floor(temp - 273.15)
     return celsius
   }

  const handleSubmit = e => {
    e.preventDefault()
    if(city === ''){
      alert('Please choose a city!')
    }else{
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => {
        setWeather({
          ...weather,
          city:response.data.name,
          country: response.data.sys.country,
          icon: getWeatherId(response.data.weather[0].id),
          temperature: calcCelsius(response.data.main.temp),
          feelsLike: calcCelsius(response.data.main.feels_like),
          maxTemp: calcCelsius(response.data.main.temp_max),
          minTemp: calcCelsius(response.data.main.temp_min),
          humidity: response.data.main.humidity,
          description: response.data.weather[0].main
        })
      })
      .catch(err => {
        console.log('error', err)
        alert('City not found!')
      })
    }

    setCity('')
  }


  return (
    <>
      <NavBar />
      <div className="weather_wrapper text-center">
        <div className="overlay">
          <div className="weather_data ">
            <form onSubmit={e => handleSubmit(e)} className={classes.root} noValidate autoComplete="off">
              <TextField 
                id="standard-basic" 
                label="Search City"  
                value={city} 
                onChange={e => setCity(e.target.value)} 
              />
              <button type='submit'>Get Weather</button>
            </form>
            <h1>{weather.city}, {weather.country}</h1>
            <i className={`wi ${weather.icon} mb-5 mt-5`} />
            <p>{weather.description}</p>
            <p>Temperature: {weather.temperature}&deg;C</p>
            <p>Feels Like: {weather.feelsLike}&deg;</p>
            <p>Max: {weather.maxTemp}&deg;</p>
            <p>Min: {weather.minTemp}&deg;</p>
            <p>Humidity: {weather.humidity}%</p>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Weather