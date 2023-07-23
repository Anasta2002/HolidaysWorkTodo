import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CalendarPage from './pages/CalendarPage';
import WeatherPage from './pages/WeatherPage';
import NavBar from './components/NavBar/NavBar';
import React, { useState } from 'react'
import AdvicesPage from './pages/AdvicesPage';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function App() {
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
    
    const [tasks, setTasks] = useState(initialTasks);
    const newTasks = Object.keys(tasks) //создание массива из объекта

    const [selectedDay, setSelectedDay] = useState('Monday');

    // setTask обновляет tasks
    const handleChangeSelect = (selectedOption) => {
        setSelectedDay(selectedOption.value)
    };

    //under development
    const [ allTasks, setAllTasks ] = useState([])
    allTasks.push(tasks.Monday.map(el => el.value))
    // allTasks.push(tasks.Tuesday.map(el => el.value))
    // allTasks.push(tasks.Wednesday.map(el => el.value))
    // allTasks.push(tasks.Thursday.map(el => el.value))
    // allTasks.push(tasks.Friday.map(el => el.value))
    // allTasks.push(tasks.Saturday.map(el => el.value))
    // tasks.Sunday.map(el => el.value != [] ? allTasks.push(el.value) : '')
    console.log(allTasks)

    return (
        // <div style={{display: 'flex', width: '100%'}}>
        <div className='wrapper'>
            <NavBar 
                initialTasks={initialTasks} 
                tasks={tasks} setTasks={setTasks} 
                newTasks={newTasks} 
                selectedDay={selectedDay} 
                handleChangeSelect={handleChangeSelect} 
                allTasks={allTasks}
            />
            <Routes>
                <Route path='/' element={<Home tasks={tasks} setTasks={setTasks}  newTasks={newTasks} selectedDay={selectedDay} />}/>
                <Route path='/calendar' element={<CalendarPage />}/>
                <Route path='/advices' element={<AdvicesPage />}/>
                <Route path='/weather' element={<WeatherPage />}/>
            </Routes>     
        </div>
    );
}


export default App;
