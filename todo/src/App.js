import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CalendarPage from './pages/CalendarPage';
import WeatherPage from './pages/WeatherPage';
import NavBar from './components/NavBar/NavBar';
import React, { useState } from 'react'

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

    return (
        <div style={{display: 'flex', width: '100%'}}>
            <NavBar 
                initialTasks={initialTasks} 
                tasks={tasks} setTasks={setTasks} 
                newTasks={newTasks} 
                selectedDay={selectedDay} 
                handleChangeSelect={handleChangeSelect} 
            />
            <Routes>
                <Route path='/' element={<Home tasks={tasks} setTasks={setTasks}  newTasks={newTasks} selectedDay={selectedDay} />}/>
                <Route path='/calendar' element={<CalendarPage />}/>
                <Route path='/weather' element={<WeatherPage />}/>
            </Routes>            
        </div>
    );
}


export default App;
