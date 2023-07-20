import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CalendarPage from './pages/CalendarPage';
import WeatherPage from './pages/WeatherPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/calendar' element={<CalendarPage />}/>
            <Route path='/weather' element={<WeatherPage />}/>
        </Routes>
    );
}


export default App;
