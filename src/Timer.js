import React from 'react'
import {useState} from 'react'
export default function Timer(){
  const[sec,stSec]=useState(0)
  const[hr,setHr]=useState(0)
  const[min,setMin]=useState(0)
  const[active,setActive]=useState(true)
  return(
    <div>
    <button></button>
    </div>
  )
}