import React from 'react'
import {useRef} from 'react'
export default function ExampleRef(){
  let ref=useRef(0)
  function handleClick(){
    ref.current=ref.current+1
    alert('you clicked',ref.current+'times!')
  }
  return(
    <div>
      <button onClick={handleClick}>Clickme</button>
    </div>
  )
}