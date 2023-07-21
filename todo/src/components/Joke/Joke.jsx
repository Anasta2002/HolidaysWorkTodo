import React, { useEffect, useState } from 'react'
import { getJokes } from '../../requests/getData';
import s from './index.module.css'

export default function Joke() {
    const [ jokes, setJokes] = useState([])
    useEffect(() => getJokes(setJokes), [])
    
    console.log(jokes)

    return (
        <div className={s.tip_window}>
            {jokes}
        </div>
    )
}
