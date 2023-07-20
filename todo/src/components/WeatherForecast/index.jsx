import React, { useEffect, useState } from 'react'

export default function WeatherForecast() {

const [forecast, setForecast] = useState()

useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
    .then(res => res.json())
    .then(data => {console.log(data)})
},[])



  return (
    <div>

    </div>
  )
}
