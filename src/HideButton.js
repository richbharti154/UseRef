import React from 'react'
import {useState} from 'react'
export default function Hidebutton(){
  const[show,setShow]=useState(true)
  return(
    <div>
<button onClick={()=>setShow(!show)}>{show?'show':'hide'}</button>
<p>{show &&<div>Toggle</div>}</p>
    </div>
  )
}