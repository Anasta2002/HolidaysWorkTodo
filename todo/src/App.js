import { useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';

function App() {
  const [tasks, setTask] = useState([])
  const add_task = new_task=> setTask([...tasks, new_task]);
  const remove_task = id => setTask(tasks.filter((pr => pr.id !== id)))

  return (
    <div className="App">
        <AddTaskForm add_task={add_task} remove_task={remove_task} />
    </div>
  );
}

export default App;
