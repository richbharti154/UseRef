import React from 'react'
import {useState} from 'react'
export default function Lucky(){
  const[num,setNum]=useState(0)
  function handleClick(){
    
  }
  return(
    <div>
   <input onChange={handleClick}/>
    </div>
  )
}