import React  from 'react'
import {useState} from 'react'
const arr=['yellow','red','brown']
export default function ColorButton(){

 const[data,setData]=useState('white')
 function handleClick(ele){
  setData(ele)
 }
 return(
  <>
  <div style={{backgroundColor:data,height:'100vh',width:'100%'}}>
    {arr.map((ele)=><div>
<button onClick={()=>handleClick(ele)}>{ele}</button>
</div>)}
  </div>
  </>
 )
}