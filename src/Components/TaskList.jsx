import React from 'react'
import Task from './Task';

function TaskList({tasks,
   onDelete, onToggle}) {
  return (
    <div className='mt-5 items-stretch '>
    {tasks.map((task) => 
      (<Task key={task.id} 
      task={task} 
      onDelete={onDelete} 
      onToggle={onToggle}
      />)
      )
      }
    </div>
  );
}

export default TaskList  