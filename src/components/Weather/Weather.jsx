import React, {useEffect, useContext, useState} from 'react'
import './Weather.scss'
import 'weather-icons/css/weather-icons.css'
import {WeatherContext} from '../../context/WeatherContext'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const apiKey = '2c385d520ea0c956bcf436dacb3c17e5'

const weatherIcon = {
  Thunderstorm: 'wi-thunderstorm',
  Drizzle: 'wi-sleet',
  Rain: 'wi-storm-showers',
  Snow: 'wi-snow',
  Atmosphere: 'wi-fog',
  Clear: 'wi-day-sunny',
  Clounds: 'wi-day-fog'
}



const Weather = () => {
  const classes = useStyles();
  const [weather, setWeather] = useContext(WeatherContext)
  const [city, setCity] = useState('')
  

  // const getWeather = () => {
    
  // }

  // useEffect(()  => {
  //   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=${apiKey}`)
  //     .then(response => {
  //       console.log('searched city', response)
  //       getWeatherId(weatherIcon, response.weather.id)
  //       setWeather({
  //         ...weather,
  //         country: response.data.name,
  //         temperature: response.data.main.temp
  //       })
        
  //     })
  //     .catch(err => {
  //       console.log('error', err)
  //     })
  // }, [])

  

  const getWeatherId = (icon, rangeId) => {
    switch(true){
      case rangeId >= 200 && rangeId <= 232:
        setWeather({
          ...weather,
          icon: weatherIcon.Thunderstorm
        })
        break
      case rangeId >= 300 && rangeId <= 321:
        setWeather({
          ...weather,
          icon: weatherIcon.Drizzle
        })
        break
      case rangeId >= 500 && rangeId <= 531:
        setWeather({
          ...weather,
          icon: weatherIcon.Rain
        })
        break
      case rangeId >= 600 && rangeId <= 622:
        setWeather({
          ...weather,
          icon: weatherIcon.Snow
        })
        break
      case rangeId >= 701 && rangeId <= 781:
        setWeather({
          ...weather,
          icon: weatherIcon.Atmosphere
        })
        break
      case rangeId === 800:
        setWeather({
          ...weather,
          icon: weatherIcon.Clear
        })
        break
      case rangeId >= 801 && rangeId <= 804:
        setWeather({
          ...weather,
          icon: weatherIcon.Clounds
        })
        break
      default:
        setWeather({
          ...weather,
          icon: weatherIcon.Clear
        })
    }
  }

 


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
        getWeatherId(weatherIcon, response.weather.id)
        setWeather({
          ...weather,
          country: response.data.name,
          temperature: calcCelsius(response.data.main.temp),
          maxTemp: calcCelsius(response.data.main.temp_max),
          minTemp: calcCelsius(response.data.main.temp_min),
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
      <div className="weather_wrapper">
        <form onSubmit={e => handleSubmit(e)} className={classes.root} noValidate autoComplete="off">
          <TextField 
            id="standard-basic" 
            label="Outlined"  
            value={city} 
            onChange={e => setCity(e.target.value)} 
          />
          <button type='submit'>Get Weather</button>
        </form>
        <h1>{weather.country}</h1>
        <i className={`wi ${weather.icon}`} />
        <h3>{weather.temperature}</h3>
        <h3>{weather.maxTemp}</h3>
        <h3>{weather.minTemp}</h3>
        <h3>{weather.description}</h3>
        
        {console.log(weather)}
      </div>
    </>
  )
}

export default Weather