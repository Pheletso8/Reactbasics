import React from 'react';
import { useState } from 'react';

function Form({ onAdd }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form onSubmit={onSubmit} className='mt-5'>
        <div className='grid font-sans'>
            <label className='font-bold'>Task</label>
            <input type="text" 
            placeholder='Add Task' 
            className='border pl-3 p-1 m-2'
            value={text}
            onChange={(e) => setText(e.target.value)} 
            />
        </div>
        <div className='grid mt-4 font-sans'>
            <label className='font-bold'>Day & Time</label>
            <input type="text" 
            placeholder='Add Day & Time' 
            className='border pl-3 p-1 m-2'
            value={day}
            onChange={(e) => setDay(e.target.value)} 
            />
        </div>
        <div className='flex mt-4 font-bold'>
            <label htmlFor="">Set Reminder</label>
            <input type="checkbox"
            checked={reminder}
            value={reminder}
            className='ml-auto pr-11'
            onChange={(e) => setReminder(e.currentTarget.checked)} 
            />
        </div>
        <input type='submit' value='Save Task' 
        className='border rounded text-center mt-4 text-white p-1 m-2 font-bold w-full' 
        style={{backgroundColor:'black', cursor:'pointer'}} />
     </form>
  )
}

export default Form