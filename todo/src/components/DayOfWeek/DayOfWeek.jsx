import React from 'react'
import s from './index.module.css'
import { IoIosClose } from 'react-icons/io'

export default function DayOfWeek() {
  return (
    <div>
      <div className={s.day}>
        <IoIosClose />
        Here is the task for this day:</div>
    </div>
  )
}
