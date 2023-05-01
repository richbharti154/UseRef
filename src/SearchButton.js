import React from 'react'
import {useState} from 'react'
export default function SearchButton(){
  const[data1,setData]=useState("")
  const data=[{
  name: ' Todolost'},
  {name: 'hey there'},
  {name: 'Functionup'},
  ],
  function handleClick(e){
  setData(e.target.value)
  }
  return(
    <div>
      <h1>Search bar</h1>
   <b>:Search</b>
   <input value={data1} onChange={handleClick}/>
   {
  data.filter((ele)=>{return ele.name.toLowerCase().includes
  (data1.toLowerCase())})
  .map((x)=>{return<li>{x}</li>})
  }
    </div>
  )
}