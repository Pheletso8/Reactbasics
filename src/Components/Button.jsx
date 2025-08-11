import React from 'react'

function Button({text, onAdd}){
  
  return (
    <button className='h-8 rounded'
     style={{backgroundColor:'green'}} 
     onClick={onAdd} type='button'>
      {text}
    </button>
  );
}

export default Button