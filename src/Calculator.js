import React from 'react'
import {useState} from 'react'
export default function Calculator(){
  const[result,setResult]=useState('')
  function handleClick(e){
    setResult(result.concat(e.target.value))
  }
  function handleClear(){
    setResult('')
  }
  function handleBackspace(){
    setResult(result.slice(0,-1))

  }
  function handleResult(){
    setResult(eval(result).toString())
  }

  
  return(
    <div>
      <input  value={result}/>
      <button onClick={handleClear}>clear</button>
      <button onClick={handleBackspace}>Backspace</button>
      <button onClick={handleResult}>Results</button>
      <button value='1' onClick={handleClick}>1</button>
      <button value='2' onClick={handleClick}>2</button>
      <button value='*' onClick={handleClick}>*</button>
      <button value='/' onClick={handleClick}>/</button>
      <button value='%'  onClick={handleClick}>%</button>
      <button value='-' onClick={handleClick}>-</button>

    </div>
  )
}

//target gives you the element that triggered the event. So, event. target. value retrieves the value of that element (an input field, in your example)