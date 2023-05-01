import React from 'react'
import {useState} from 'react'
const nums=[1,2,34,8,6,0,22,89]
export default function RandomNumber(){
  const[data,setData]=useState(nums)
  function handleClick(){
    let c=Math.ceil(Math.random()*nums.length)
    setData(c)
    console.log(c)
  }
  return(
    <div>
<p>{data}</p>
   <button onClick={()=>handleClick()}>RandomNumber</button>
    </div>
  )
}