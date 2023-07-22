import React, { useState } from 'react'
import { Calendar as BigCalendar, momentLocalizer, CalendarProps } from 'react-big-calendar'
import moment from 'moment'
import s from './index.module.css'
import Calendar from 'react-production-calendar'

const localizer = momentLocalizer(moment)

export default function PlanCalendar() {
    const [calendarValue, setCalendarValue] = useState(new Date())

    const [ year, setYear ] = useState(2023);
    const [ month, setMonth ] = useState( (new Date()).getMonth() + 1 );

    return (
        <div style={{height: '100%'}}>
            {/* <BigCalendar
                localizer={localizer}
                // events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                className={s.calendar_container}
                // onChange={setCalendarValue}
                // value={calendarValue}
            /> */}
            {/* <Calendar
                visibleYear = { false }
                year = { 2023 }
                month = { month }
            /> */}
        </div>
    )
}