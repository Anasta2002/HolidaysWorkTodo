import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)


export default function BigCalendar() {
    return (
        <div style={{height: '900px', width: '1000px'}}>
            <Calendar
              localizer={localizer}
              style={{ height: '500px' }}
            />
        </div>
    )
}