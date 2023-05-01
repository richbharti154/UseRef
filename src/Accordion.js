import React from 'react'
import {useState} from 'react'
export default function Accordion(){
const[show,setShow]=useState(false)
const[show1,setShow1]=useState(false)
  return(
  <>
  <div>
    <div>
    <div onClick={()=>setShow(!show)}>
    <div>1.whai is react</div>
    <div> {show ? '-' :'+'}</div>
    </div>
    {show &&(<div >bhhukknbvffv

    </div>)}
    </div>
    <div>
     <div> 
   <div onClick={()=>setShow1(!show1)}>
  <div> 2.what is js</div>
  <div>{show1 ? '-':"+"}</div>
   </div>
   {show1 &&(<div>jjjhtfcv ggtgt</div>)}
   </div>
   </div>
   </div>
  </>
  )
}