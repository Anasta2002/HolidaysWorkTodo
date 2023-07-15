import React, { useState } from 'react'
import s from './index.module.css'



export default function NavBarCalendar({add_task}) {
    const submit = e => {
        e.preventDefault();
        const { task } = e.target;
        const new_task = {
            id: Date.now(),
            value: task.value,
            label: task.value,
            day: selectedDay
        }
        add_task(new_task);
        console.log(new_task)
        e.target.reset(new_task);
    }

    const [selectedDay, setSelectedDay] = useState('')

    const dayChange = e => {
        setSelectedDay(e.target.value)
    }

  return (
    <div>
        <h1></h1>
        <form className={s.form} onSubmit={submit}>

                <input type='text' name='task' className={s.textarea}/>
 
            <select className={s.selector} name='day' value={selectedDay} onChange={dayChange}>
                <option value={'Monday'}>Monday</option>
                <option value={'Tuesday'}>Tuesday</option>
                <option value={'Wednesday'}>Wednesday</option>
                <option value={'Thursday'}>Thursday</option>
                <option value={'Friday'}>Friday</option>
                <option value={'Saturday'}>Satuday</option>
                <option value={'Sunday'}>Sunday</option>
            </select>
            <button className={s.button}>Add this task</button>
        </form>
    </div>
  )
}
