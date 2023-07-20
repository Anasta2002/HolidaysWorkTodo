import React, { useState } from 'react'
import s from './index.module.css'
import AddTaskIcon from '../../assets/AddTaskIcon';
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { GiClick } from 'react-icons/gi'
import TasksContainer from '../TasksContainer';
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { dayOptions } from '../../data/data_select';
import Tip from '../Tip/Tip';


export default function NavBarHome() {

    //создается объект, у которого ключами являются дни недели, внутри которых пустой массив, в которые мы будем пушить наши таски, чтобы они отображались отдельно в каждом дне
    const initialTasks = {
        Monday: [{id: 1, value: 'Sleep all day'}, {id: 2, value: 'Play games'}],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
    }

    const [tasks, setTasks] = useState(initialTasks)
    const [selectedDay, setSelectedDay] = useState('Monday')
    
    const submit = e => {
        e.preventDefault();
        const { task } = e.target;
        const new_task = {
            id: Date.now(),
            value: task.value,
            label: task.value,
            day: selectedDay,
        }
        add_task(new_task);
        console.log(new_task);
        e.target.reset();

    }



    const newTasks = Object.keys(tasks) //создание массива из объекта




// setTask обновляет tasks
const add_task = (task) => {
    setTasks(tasks => ({
        ...tasks, 
        [selectedDay]: [...tasks[selectedDay], task] //обновляем массив у выбранного дня и добавляем таск
    }));
}

    const showActivity = () => {
        return <Tip />
    }


const colorStylesSelect = {
    control: (styles) => ({ ...styles, backgroundColor: "#212121", height: '63px', border: 'none', color: 'f2f2f2' }),
    option: (styles) => ({ ...styles })
};


const handleChangeSelect = (selectedOption) => {
    setSelectedDay(selectedOption.value)
};

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
                        {/* <SelectDay /> */}
                        <Select
                            options={dayOptions}
                            onChange={handleChangeSelect}
                            styles={colorStylesSelect}
                            name='day'
                            className={s.selector}
                        />
                    </div>
                    <button className={s.button}>
                        <GiClick style={{ fill: '#b05fff' }} />  &nbsp;
                        Click here to add task
                    </button>
                    <Link to={'/calendar'} className={s.redirect_calendar}>
                        <BsFillCalendarDayFill style={{ fill: '#b05fff' }} /> &nbsp;
                        Go to Calendar
                    </Link>
                    <button className={s.button} onClick={showActivity}>
                        <GiClick style={{ fill: '#b05fff' }} />  &nbsp;
                        Bored? Click here
                    </button>
                </form>
            </div>
            <div>
                <TasksContainer newTasks={newTasks} tasks={tasks} />
            </div>
        </div>
    )
}
