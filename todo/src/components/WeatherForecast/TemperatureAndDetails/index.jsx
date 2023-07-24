import React from 'react'
import s from './index.module.css'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../../../services/weatherService'

export default function TemperatureAndDetails({weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
}}) {
    return (
        <div>
            <div className={s.sky}>
                <p>{details}</p>
            </div>

            <div className={s.temperature_container}>
                <img src={iconUrlFromCode(icon)} alt="" />
                <p>{`${temp.toFixed()}°`}</p>
                <div className={s.measurements}>
                    <div className={s.measure}>
                        <UilTemperature size={18} className='mr-1' />
                        Real feel:
                        <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
                    </div>
                    <div className={s.measure}>
                        <UilTear size={18} className='mr-1' />
                        Humidity:
                        <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
                    </div>
                    <div className={s.measure}>
                        <UilWind size={18} className='mr-1' />
                        Wind:
                        <span className="font-medium ml-1">{`${speed.toFixed()}km/h`}</span>
                        <p className="font-light">|</p>
                    </div>
                </div>
            </div>

            <div className={s.sun_container}>
                <UilSun />
                <p className={s.sun_text}>
                    Rise: <span>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span> 
                </p>
                <UilSunset />
                <p className={s.sun_text}>
                    Set: <span>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span> 
                </p>
                <UilSun />
                <p className={s.sun_text}>
                    High: <span>{`${temp_max.toFixed()}°`}</span> 
                </p>
                <UilSun />
                <p className={s.sun_text}>
                    Low: <span>{`${temp_min.toFixed()}°`}</span> 
                </p>
            </div>
        </div>
    )
}
