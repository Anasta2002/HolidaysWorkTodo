import React, { useEffect, useState } from 'react'
import { getActivities } from '../../requests/getData';
import s from './index.module.css'

export default function Tip() {
    const [ activities, setActivities] = useState([])
    useEffect(() => getActivities(setActivities), [])
    
    console.log(activities)

    return (
        <div className={s.tip_window}>
            {activities}
        </div>
    )
}
