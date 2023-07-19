import React, { useState } from 'react'
import s from './index.module.css'

export default function TaskItem({task}) {

  const [checked, setChecked] = useState(false)

  

  return (
    <div className={s.task}>
      <label>
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className={s.task_input} />
        {task}
        </label>
    </div>

  )
}
