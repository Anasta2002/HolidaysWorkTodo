import React from 'react'
import Advices from '../components/Advices/Advices'
import Joke from '../components/Joke/Joke'
import s from './pages.module.css'

export default function AdvicesPage() {
    return (
        <div className={s.advices_page}>
            <Advices />
            <Joke />
        </div>
    )
}
