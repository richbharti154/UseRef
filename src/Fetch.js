import React from 'react'
import {useState,useEffect} from 'react'
export default function Fetch(){
  const[value,setValue]=useState('')
  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
  .then(response=>response.json())
  .then(data=>setValue(data.message))
  },[])
return(
  <div>
    <img src={value}/>
  </div>
)
}
