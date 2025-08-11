import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Task({task, onDelete, onToggle}) {
  return (
    <div className={`task ${task.reminder ? 
      'border-l-4 border-green-800': '' }`} 
    onDoubleClick={() => onToggle(task.id)}>
        <h3 className='flex mt-3 pl-2'>{task.text} 
          <FaTimes 
        className='ml-auto mr-9' 
        style={{color:'red', cursor:'pointer'}} 
        onClick={() => onDelete(task.id)} 
        /></h3>
        <p className='pl-2 mb-2'>{task.day}</p>
    </div>
  );
}

export default Task