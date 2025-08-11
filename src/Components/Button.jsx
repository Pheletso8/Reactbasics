import React from 'react'

function Button({text, toggleAdd}){
  
  return (
    <button className='h-8 rounded w-16'
     style={{backgroundColor:'green'}} 
     onClick={toggleAdd} type='button'>
      {text}
    </button>
  );
}

export default Button