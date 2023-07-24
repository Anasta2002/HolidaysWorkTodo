import React, { useEffect, useState } from 'react'
import '../../index.css'
import TopButtons from './TopButtons'
import WeatherInputs from './WeatherInputs'
import TimeAndLocation from './TimeAndLocation'
import TemperatureAndDetails from './TemperatureAndDetails'
import './index.css'
import getFormattedWeatherData from '../../services/weatherService'



export default function WeatherForecast() {

  const [query, setQuery] = useState({ q: 'berlin' })

  const [weather, setWeather] = useState(null)



  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query }).then(data => {
        setWeather(data)
      })

    }

    fetchWeather()

  }, [query])




  return (

    <div className='main_container'> 
      <TopButtons setQuery={setQuery} className='top_btns'/>
      <WeatherInputs setQuery={setQuery}/>

      {weather && (
        <div>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather}/>

        </div>
      )}
    </div>

  )
}
