import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import s from './index.module.css'

export default function WeatherInputs({setQuery}) {

    const [city, setCity] = useState('')


    const handleSearchClick = () => {
        if(city !== '') setQuery({q: city})
    } 

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({
                    lat,
                    lon
                })
            })
        }
    }

    return (
        <div className={s.input_wrapper}>
            <div className={s.input_container}>
                <input
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    placeholder='Search the city...'
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' />
                <UilSearch onClick={handleSearchClick} size={25} className={s.icon_text}/>
                <UilLocationPoint  onClick={handleLocationClick} size={25} className={s.icon_text}/>
            </div>
        </div>
    )
}
