import React, { useState } from 'react'
import s from './index.module.css'
import AddTaskIcon from '../../assets/AddTaskIcon';
import SelectDay from '../../assets/SelectDay';
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { GiClick } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import TasksContainer from '../TasksContainer';



export default function NavBarHome() {
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
        console.log(new_task);
        e.target.reset();
    }


    //создается объект, у которого ключами являются дни недели, внутри которых пустой массив, в который мы будем пушить наши таски, чтобы они отображались отдельно в каждом дне
    const initialTasks = {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
    } 
    

    const [tasks, setTasks] = useState(initialTasks) 
    const [selectedDay, setSelectedDay] = useState('')



    // setTask обновляет tasks
 const add_task = (task) => {
    setTasks(tasks => ({
        ...tasks,
        [selectedDay]: [...tasks[selectedDay], task]
    }));
}

    const newTasks = Object.keys(tasks) //создание массива из объекта

    const dayChange = e => {
        setSelectedDay(e.target.value)

    }

    return (
        <div className={s.main}>
            <div className={s.navbar}>
                <h1 className={s.navbar_title}>Todos</h1>
                <form onSubmit={submit} className={s.form}>
                    <div className={s.item_container}>
                        <AddTaskIcon />
                        <input type='text' name='task' className={s.textarea} placeholder='Add task' />
                    </div>

                    <div className={s.item_container}>
                        <SelectDay />
                        <select className={s.selector} name='day' value={selectedDay} onChange={dayChange}>
                            <option value={'Monday'}>Monday</option>
                            <option value={'Tuesday'}>Tuesday</option>
                            <option value={'Wednesday'}>Wednesday</option>
                            <option value={'Thursday'}>Thursday</option>
                            <option value={'Friday'}>Friday</option>
                            <option value={'Saturday'}>Satuday</option>
                            <option value={'Sunday'}>Sunday</option>
                        </select>
                    </div>

                    <button className={s.button}>
                        <GiClick style={{ fill: '#b05fff' }} />  &nbsp;
                        Click here to add task
                    </button>

                    <Link to={'/calendar'} className={s.redirect_calendar}>
                        <BsFillCalendarDayFill style={{ fill: '#b05fff' }} /> &nbsp;
                        Go to Calendar
                    </Link>
                </form>
            </div>
            <div>
                <TasksContainer newTasks={newTasks} tasks={tasks} />
            </div>
        </div>
    )
}
