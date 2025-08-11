import React from 'react'

function Button({text, onAdd}){
  
  return (
    <button className='h-8 rounded transition delay-150 duration-300 ease-in-out hover:-translate-x+0.5 hover:scale-110'
     style={{backgroundColor:'green'}} 
     onClick={onAdd} type='button'>
      {text}
    </button>
  );
}

export default Button