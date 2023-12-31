import React from 'react'
import TasksContainer from '../components/TasksContainer/index';

export default function Home({tasks, newTasks, setTasks, selectedDay}) {

    const delete_task = (id, selectedDay) => {
        setTasks(tasks => ({
            ...tasks,
            [selectedDay]: [...tasks[selectedDay].filter(el => el.id !== id)]
        }))
    }

    return <TasksContainer newTasks={newTasks} tasks={tasks} delete_task={delete_task} selectedDay={selectedDay}/>
}
