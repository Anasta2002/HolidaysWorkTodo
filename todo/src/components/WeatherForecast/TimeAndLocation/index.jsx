import React from 'react'
import { formatToLocalTime } from '../../../services/weatherService'
import s from './index.module.css'

export default function TimeAndLocation({weather: {dt, timezone, name, country}}) {
    return (
        <div>
            <div className={s.date}>
                <p>
                    {formatToLocalTime(dt, timezone)}
                </p>
            </div>

            <div className={s.location}>
                <p>
                    {`${name}, ${country}`}
                </p>
            </div>
        </div>
    )
}
