import React, {useState} from 'react'
import s from './index.module.css'
import AddTaskIcon from '../../assets/AddTaskIcon';
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { GiClick } from 'react-icons/gi'
import { Route, Routes, Link } from 'react-router-dom';
import Select from 'react-select'
import { dayOptions } from '../../data/data_select';
import { TiWeatherStormy } from 'react-icons/ti'
import { IoIosHome } from 'react-icons/io'
import { CiCircleList } from 'react-icons/ci';

export default function NavBar({tasks, setTasks, selectedDay, handleChangeSelect, allTasks}) {
    const isMobileView = window.innerWidth < 990;

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

    //under development
    // const submitToCalendar = e => {
    //     e.preventDefault();
    //     const { date } = e.target;
    //     const new_event = {
    //         id: Date.now(),
    //         value: date.value,
    //         label: date.value,
    //         day: selectedDay,
    //     }
    //     add_task(date);
    //     console.log(date);
    //     e.target.reset();
    // }

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

    const [isHidden, setIsHidden] = useState(false)
    const hiddenNav = [s.navbar, isHidden ? s.navbarHiden : s.navAppear].join(' ')

    const toggleHidden = () => {
        setIsHidden(prevState => !prevState)
    }

    const url = window.location.pathname

    return (
        <nav className={s.main}>
            <div className={`${s.navbar} ${hiddenNav}`}>
                {isMobileView && 
                    <div className={s.menu_icon}>
                        <CiCircleList 
                            onClick={toggleHidden} 
                            style={{ fill: '#b05fff', width: '30px', height: '30px' }}  
                        />
                    </div>
                }
                <h1 className={s.navbar_title}>Todos</h1>
                <form onSubmit={submit} className={s.form}>
                    <div className={s.input_container}>
                        <AddTaskIcon />
                        <Routes>
                            <Route path='/calendar' element={<input type='date' name='date' className={s.textarea} placeholder='Select exact date'/>} />
                            <Route path='/' element={<input type='text' name='task' className={s.textarea} placeholder='Add task' />} />   
                            <Route path='/advices' element={<input type='text' name='task' className={s.textarea} placeholder='Add task' />} />     
                            <Route path='/weather' element={<input type='text' name='task' className={s.textarea} placeholder='Add task' />} />                
                        </Routes>
                    </div>
                    <div className={s.item_container}>
                        <Routes>
                            <Route path='/calendar' element={
                                <Select
                                    options={allTasks}
                                    onChange={handleChangeSelect}
                                    styles={colorStylesSelect}
                                    name='day'
                                    className={s.selector}
                                />
                            } />
                            <Route path='/' element={
                                <Select
                                    options={dayOptions}
                                    onChange={handleChangeSelect}
                                    styles={colorStylesSelect}
                                    name='day'
                                    className={s.selector}
                                />
                            } />
                            <Route path='/advices' element={
                                <Select
                                    options={dayOptions}
                                    onChange={handleChangeSelect}
                                    styles={colorStylesSelect}
                                    name='day'
                                    className={s.selector}
                                />
                            } />
                            <Route path='/weather' element={
                                <Select
                                    options={dayOptions}
                                    onChange={handleChangeSelect}
                                    styles={colorStylesSelect}
                                    name='day'
                                    className={s.selector}
                                />
                            } />  
                        </Routes>
                    </div>
                    <Routes>
                        <Route path='/calendar' element={
                            <button className={s.button}>
                                <GiClick style={{fill: '#b05fff'}}/>  &nbsp; 
                                Add this task
                            </button>
                        } />
                        <Route path='/' element={
                            <button className={s.button}>
                                <GiClick style={{ fill: '#b05fff' }} />  &nbsp;
                                Add a new task
                            </button>
                        } /> 
                        <Route path='/advices' element={
                            <button className={s.button}>
                                <GiClick style={{ fill: '#b05fff' }} />  &nbsp;
                                Add a new task
                            </button>
                        } />
                        <Route path='/weather' element={
                            <button className={s.button}>
                                <GiClick style={{ fill: '#b05fff' }} />  &nbsp;
                                Add a new task
                            </button>
                        } />                     
                    </Routes>
                </form>
                <div className={s.form}>
                    <Routes>
                        <Route path='/calendar' element={
                            <Link to={'/'} className={s.redirect_calendar}>
                                <BsFillCalendarDayFill style={{ fill: '#b05fff' }} /> &nbsp;
                                Go home to add new Task
                            </Link> 
                        } />
                        <Route path='/' element={
                            <Link to={'/calendar'}  className={s.redirect_calendar}>
                                <IoIosHome style={{fill: '#b05fff'}}/> &nbsp; 
                                Go to Calendar
                            </Link>
                        }/>      
                        <Route path='/advices' element={
                            <Link to={'/'} className={s.redirect_calendar}>
                                <BsFillCalendarDayFill style={{ fill: '#b05fff' }} /> &nbsp;
                                Go home to add new Task
                            </Link> 
                        } />
                        <Route path='/weather' element={
                            <Link to={'/'} className={s.redirect_calendar}>
                                <BsFillCalendarDayFill style={{ fill: '#b05fff' }} /> &nbsp;
                                Go home to add new Task
                            </Link> 
                        } /> 
                    </Routes>
                    <Link to={'/advices'} className={s.redirect_calendar}>
                        <GiClick style={{ fill: '#b05fff' }} />  &nbsp;
                        Bored? Click here
                    </Link>
                    <Link to={'/weather'}  className={s.redirect_calendar}>
                        <TiWeatherStormy style={{ fill: '#b05fff' }} /> &nbsp;
                        Go to Weather Forecast
                    </Link>    
                </div>
            </div>
        </nav>
    )
}
