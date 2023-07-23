import React, { useEffect, useState } from 'react'
import { getActivities } from '../../requests/getData'
import s from './index.module.css'
import { MdNavigateNext } from 'react-icons/md'

export default function Advices() {
    const [ activities, setActivities] = useState([])
    useEffect(() => getActivities(setActivities), [])
    const newActivity = () => {
        getActivities(setActivities)
    }

    return (
        <div className={s.container}>
            <h3>Get your day recommendation</h3>
            <p>{activities.activity}</p>
            <button onClick={newActivity}>
                Get new advice
                <MdNavigateNext style={{ fill: '#b05fff', width: '20px', height: '20px' }}/>
            </button>
        </div>
    )
}
