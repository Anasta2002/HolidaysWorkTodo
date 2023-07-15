import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Calendar from './pages/Calendar';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/calendar' element={<Calendar />}/>
      </Routes>
    </div>
  );
}


export default App;
