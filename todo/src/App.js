import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CalendarPage from './pages/CalendarPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/calendar' element={<CalendarPage />}/>
        </Routes>
    );
}


export default App;
