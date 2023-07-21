import React from 'react'
import BigCalendar from '../components/BigCalendar/BigCalendar'

export default function CalendarPage() {
  return (
    <div style={{display: 'flex'}}>
        <div>
          <h1 style={{margin: '50px auto'}}>Here should be interesting title and small description</h1>
          <BigCalendar />
        </div>
    </div>
  )
}