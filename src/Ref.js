import React,{useRef} from 'react'
export default function App(){
  let inputRef=useRef(null)
  function handleClick(){
    inputRef.current.value=1000
    // inputRef.current.focus();
    // inputRef.current.style.color='red'
    // inputRef.current.style.display='none'   /// useref are 
    //handle like display,color.value and focus
  }
  return(
    <div>
  <h1>useRef in React</h1>
  <input type='text' ref={inputRef}/>
  <button onClick={handleClick}>Submit</button>
    </div>
  )
}
