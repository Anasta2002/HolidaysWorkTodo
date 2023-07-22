import React, { useState } from 'react'
import { Calendar as BigCalendar, momentLocalizer, CalendarProps } from 'react-big-calendar'
import moment from 'moment'
import s from './index.module.css'

const localizer = momentLocalizer(moment)

export default function PlanCalendar() {

    return (
        <div style={{height: '100%'}}>
            <BigCalendar
                localizer={localizer}
                // events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                className={s.calendar_container}
                // onChange={setCalendarValue}
                // value={calendarValue}
            />
        </div>
    )
}