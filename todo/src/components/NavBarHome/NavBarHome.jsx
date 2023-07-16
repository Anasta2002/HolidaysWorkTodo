import React, { useState } from 'react'
import s from './index.module.css'
import AddTaskIcon from '../../assets/AddTaskIcon';
import SelectDay from '../../assets/SelectDay';
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { GiClick } from 'react-icons/gi'
import { Link } from 'react-router-dom' 
import Select from 'react-select'
import { dayOptions } from '../../data/data_select';



export default function NavBarHome({add_task}) {
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

    //const [isDisabled, setIsDisabled] = useState(false);

    const colorStylesSelect = {
        control: (styles) => ({...styles, backgroundColor: "#212121"}),
        option: (styles, {data, isDisabled}) => {
            console.log( data, isDisabled);
            return { ...styles }
        }
    };

    const handleChangeSelect = (selectedOption) => {
        setSelectedDay(selectedOption)
        console.log("handleChange", selectedOption);
    };
    

  return (
    <div className={s.navbar}>
        <h1 className={s.navbar_title}>Todos</h1>
        <form onSubmit={submit} className={s.form}>
            <div className={s.item_container}>
                <AddTaskIcon />
                <input type='text' name='task' className={s.textarea} placeholder='Add task'/>
            </div>
            
            <div className={s.item_container}>
                <SelectDay />
                <Select 
                    options={dayOptions}
                    onChange={handleChangeSelect}
                    styles={colorStylesSelect}
                    name='day'             
                    className={s.selector}
                />

            </div>

            <button className={s.button}>
                <GiClick style={{fill: '#b05fff'}}/>  &nbsp; 
                Click here to add this task
            </button>

            <Link to={'/calendar'}  className={s.redirect_calendar}>
                <BsFillCalendarDayFill style={{fill: '#b05fff'}}/> &nbsp; 
                Go to Calendar
            </Link>
        </form>
    </div>
  )
}
