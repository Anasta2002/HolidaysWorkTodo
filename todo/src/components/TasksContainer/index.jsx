import React from 'react'
import TaskItem from '../TaskItem'
import s from './index.module.css'
import AddTaskIcon from '../../assets/AddTaskIcon';



export default function TasksContainer({ selectedDay, newTasks, tasks, delete_task }) {

    return (
        <div className={s.container} >
            {newTasks.map(day => (
                <div key={day} >
                    <div className={s.day_container}>
                        <AddTaskIcon />
                        <h2>{day}</h2>
                    </div>
                    <div className={s.tasks_container}>
                        <AddTaskIcon />
                        {tasks[day].map(el => <TaskItem key={el.id} {...el} task={el.value} delete_task={delete_task} day={day}/> )}
                    </div>
                </div>
            ))}
        </div>
    );
}