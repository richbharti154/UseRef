import React from 'react'
import {useState} from 'react'
export default function ColorSentence(){
  const[color,setColor]=useState('red')
  const data=[
    'hi I am richa',
    'hlo i am there',
     'I like coding',
     'I like learning',
  ]
  function handleClick(){
    setColor(color==='yellow'? 'black':'yellow')
  }
  return(
    <>
    <div style={{backgroundColor:color}}>
   {data.map((ele)=><li>{ele}</li>)}
    </div>
    <button onClick={handleClick}>Color</button>
    </>
  )
}