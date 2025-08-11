import Header from "./Components/Header";
import Form from "./Components/Form";
import TaskList from "./Components/TaskList";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
  ])
//Adding task 
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Deleting a Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

// Setting up a reminder with a double click
const addReminder = (id) => {
  setTasks(
    tasks.map((task)=>
      task.id === id ? {...task, reminder:
        !task.reminder } : task
      )
  )
}

  return (
    <div className="mx-8 my-8 p-2 border border-black rounded h-auto">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      className='flex-none'/>
     {showAddTask &&
      <Form onAdd={addTask}
      />}
      {tasks.length > 0 ? (<TaskList
      tasks={tasks} onDelete={deleteTask} onToggle={addReminder} />) : 'No Tasks To Show'}
    </div>
  );
}
  
export default App
