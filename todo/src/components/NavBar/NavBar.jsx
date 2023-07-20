import React from 'react'
import s from './index.module.css'
import AddTaskIcon from '../../assets/AddTaskIcon';
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { GiClick } from 'react-icons/gi'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { dayOptions } from '../../data/data_select';
import { TiWeatherStormy } from 'react-icons/ti'
import Tip from '../Tip/Tip';
import { IoIosHome } from 'react-icons/io'



export default function NavBar({initialTasks, tasks, setTasks, newTasks, selectedDay, handleChangeSelect}) {
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

    const add_task = (task) => {
        setTasks(tasks => ({
            ...tasks,
            [selectedDay]: [...tasks[selectedDay], task] //обновляем массив у выбранного дня и добавляем таск
        }));
    }
    
    const colorStylesSelect = {
        control: (styles) => ({ ...styles, backgroundColor: "#212121", height: '63px', border: 'none', color: 'f2f2f2' }),
        option: (styles) => ({ ...styles })
    };   
    


    const showActivity = () => {
        return <Tip />
    }

    return (
        <div className={s.navbar}>
            <h1 className={s.navbar_title}>Todos</h1>
            <form onSubmit={submit} className={s.form}>
                <div className={s.item_container}>
                    <AddTaskIcon />
                    <Routes>
                        <Route path='/calendar' element={<input type='date' name='date' className={s.textarea} placeholder='Select exact date'/>} />
                        <Route path='/' element={<input type='text' name='task' className={s.textarea} placeholder='Add task' />} />                        
                    </Routes>
                </div>
                <div className={s.item_container}>
                    {
                        window.location.pathname === '/' ?
                        <>
                            {/* <SelectDay /> */}
                            <Select
                                options={dayOptions}
                                onChange={handleChangeSelect}
                                styles={colorStylesSelect}
                                name='day'
                                className={s.selector}
                            />
                        </> :
                        <>
                            {/* <LuListChecks /> */}
                            <Select
                                options={tasks}
                                onChange={handleChangeSelect}
                                styles={colorStylesSelect}
                                name='day'
                                className={s.selector}
                            />
                        </>
                    }
                </div>
                {
                    window.location.pathname === '/' ?
                    <button className={s.button}>
                        <GiClick style={{ fill: '#b05fff' }} />  &nbsp;
                        Click here to add task
                    </button> :
                    <button className={s.button}>
                        <GiClick style={{fill: '#b05fff'}}/>  &nbsp; 
                        Click here to add this task
                    </button>
                }
                {
                    window.location.pathname === '/' ?
                    <Link to={'/calendar'} className={s.redirect_calendar}>
                        <BsFillCalendarDayFill style={{ fill: '#b05fff' }} /> &nbsp;
                        Go to Calendar
                    </Link> :
                    <Link to={'/'}  className={s.redirect_calendar}>
                        <IoIosHome style={{fill: '#b05fff'}}/> &nbsp; 
                        Go home to add new Task
                    </Link>
                }
                <button className={s.button} onClick={showActivity}>
                    <GiClick style={{ fill: '#b05fff' }} />  &nbsp;
                    Bored? Click here
                </button>
                <Link to={'/weather'}  className={s.redirect_calendar}>
                <TiWeatherStormy style={{ fill: '#b05fff' }} /> &nbsp;
                    Go to Weather Forecast
                </Link>
            </form>
        </div>
    )
}
