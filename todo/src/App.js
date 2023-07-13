import { useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';

function App() {

  const [tasks, setTask] = useState([])

  const add_task = new_task => setTask([...tasks, new_task])

  const remove_task = id => {
    //здесь будет функция по удаления одной задачи, возможно типа такого: setTask(tasks.filter((pr => pr.id !== id)))
  }

  const submit = e => {
    e.preventDefault();
    const { name_task } = e.target;
    setTask([...tasks, name_task]);
    console.log(name_task.value);
    e.target.reset();
  }

  return (
    <div className="App">
      <AddTaskForm add_task={add_task} remove_task={remove_task} />
      <div>Всем привет от Насти четверг!</div>

      <form onSubmit={submit}>
        <label>
          <input type="text" name='name_task' />
          <button>Add task</button>
        </label>
      </form>

    </div>
  );
}

export default App;
