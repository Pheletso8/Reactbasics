import React from 'react'

function Button({text, onAdd}){
  
  return (
    <div className='h-8 rounded transition delay-150 duration-300 ease-in-out hover:-translate-x+0.5 hover:scale-110'
     style={{backgroundColor:'green'}} 
     onClick={onAdd} >
        <button>{text}</button>
    </div>
  )
}

export default Button