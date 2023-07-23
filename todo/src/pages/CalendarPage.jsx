import React from 'react'
import BigCalendar from '../components/BigCalendar/BigCalendar'
import s from './pages.module.css'

export default function CalendarPage() {
  return (
    <div >
        <div>
          <h1 className={s.calendar_page_title} style={{margin: '30px auto', padding: '10px 20px 0 10%'}}>Here should be interesting title and small description</h1>
          <BigCalendar />
        </div>
    </div>
  )
}