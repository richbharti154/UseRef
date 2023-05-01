import React from 'react'
import {useState} from 'react'
export default function Fetchdata(){
  const[data,setData]=useState([])
  const[value,setValue]=useState(0)
 async function callApi(){
   setValue(value+1)
    const response=await fetch('https://pixabay.com/api/?key=33585985-74ef218054261ac227f678707&q=yellow+flowers&image_type=photo&pretty=true')
    const data= await response.json()
    setData(data.hits[value].previewURL)
     console.log(data)
  }
  // useEffect(()=>{
  //  callApi()
  //  },[])
  
  return(
    <div>
     <img src={data} alt=''/>
      <button onClick={callApi}>Fetch</button>
    </div>
  )
}