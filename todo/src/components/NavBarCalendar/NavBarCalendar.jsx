import React from 'react'
import s from './index.module.css'
import AddTaskIcon from '../../assets/AddTaskIcon';
import { LuListChecks } from 'react-icons/lu';
import { IoIosHome } from 'react-icons/io'
import { GiClick } from 'react-icons/gi'
import { Link } from 'react-router-dom' 



export default function NavBarCalendar() {

  return (
    <div className={s.navbar}>
        <h1 className={s.navbar_title}>Todos</h1>
        <form className={s.form}>
            <div className={s.item_container}>
                <AddTaskIcon />
                <input type='data' name='task' className={s.textarea} placeholder='Select exact date'/>
            </div>
            
            <div className={s.item_container}>
                <LuListChecks />
                <select className={s.selector}>
                    <option>Здесь будут те таски, которые мы добавили на первой странице</option>
                </select>                
            </div>

            <button className={s.button}>
                <GiClick style={{fill: '#b05fff'}}/>  &nbsp; 
                Click here to add this task
            </button>

            <Link to={'/'}  className={s.redirect_calendar}>
                <IoIosHome style={{fill: '#b05fff'}}/> &nbsp; 
                Go home to add new Task
            </Link>
        </form>
    </div>
  )
}
