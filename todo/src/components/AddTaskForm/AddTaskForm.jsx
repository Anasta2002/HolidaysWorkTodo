import React from 'react'
import s from './index.module.css'

export default function AddTaskForm({add_task}) {
    const submit = e => {
        e.preventDefault();
        const { task } = e.target;
        const new_task = {
            id: Date.now(),
            value: task.value,
            label: task.value,
        }
        add_task(new_task);
        console.log(new_task)
        e.target.reset(new_task);
    }

  return (
    <div>
        <h1>It's a cool idea to visualize your plans. Let's just try it</h1>
        <form className={s.form} onSubmit={submit}>
            {/* <label htmlFor='task'>Add your task. Feel free to add any task, you can remove it anytime */}
                <input type='text' name='task' className={s.textarea}/>
            {/* </label> */}
            
            <select className={s.selector}>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Satuday</option>
                <option>Sunday</option>
            </select>
            <button className={s.button}>Add this task</button>
        </form>
    </div>
  )
}
