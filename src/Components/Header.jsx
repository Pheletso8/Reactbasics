import React from 'react'
import Button from './Button';

function Header({onAdd}){
  const text = 'Add';
  return (
    <div className='flex w-full mt-5'>
        <div className='font-sans font-bold text-3xl pl-4'><h1>Task Tracker</h1></div>
        <div className='ml-auto border rounded w-20 text-center mr-4 text-white'><Button text={text}
        onClick={onAdd} />
        </div>
    </div>
  );
}

export default Header