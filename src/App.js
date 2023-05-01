import React from "react";
import {useState} from 'react'

export default function App() {
  const[count,setCount]=useState(0)
   let color
  if(count>10&&count>=0){
    color='red'
  }
  else if(count<0){
    color='yellow'
  }
  return (
    <div style={{backgroundColor:color,height:'100vh',width:'100%'}}>
      <h2> To show the Number </h2>
     <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  );
}
