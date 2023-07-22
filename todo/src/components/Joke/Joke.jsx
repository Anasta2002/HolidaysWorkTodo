import React, { useEffect, useState } from 'react'
import { getJokes } from '../../requests/getData'
import s from './index.module.css'
import { MdNavigateNext } from 'react-icons/md'
import { BsEmojiSmile } from 'react-icons/bs'

export default function Joke() {
    const [ jokes, setJokes] = useState([])
    useEffect(() => getJokes(setJokes), [])

    const newJoke = () => {
        getJokes(setJokes)
    }

    return (
        <div className={s.tip_window}>
            <div className={s.bottom_container}>
                <h3>If you have a sad day click the button below. There are jokes and funny facts. Please do not be sad</h3>
                <ul>
                    <li>{jokes.punchline}</li>
                    <li>{jokes.setup}</li>
                </ul>
                <button onClick={newJoke}>
                    Get new joke <BsEmojiSmile /> Just keep smiling 
                    
                    <MdNavigateNext style={{ fill: '#b05fff', width: '20px', height: '20px' }}/>
                </button>
            </div>
        </div>
    )
}