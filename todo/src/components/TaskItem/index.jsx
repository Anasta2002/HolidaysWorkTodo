import React, { useState } from 'react'
import s from './index.module.css'

export default function TaskItem({ task, delete_task, id, day }) {

  const [ischecked, setIsChecked] = useState(false)



  return (
    <div className={s.task}>
      <label className={s.custom_checkbox} >
        <input type="checkbox" checked={ischecked} onChange={() => setIsChecked(!ischecked)} className={s.task_input} />
        <span className={s.input_span}></span>
        <span className={ ischecked ? s.task_completed : '' } onClick={() => { delete_task(id, day) }} >
          {task}
        </span>
      </label>
    </div>
  )
}
