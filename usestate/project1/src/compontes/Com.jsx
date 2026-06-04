import React,{useState} from 'react'
import './Com.css'

const Com = () => {
   const [count, setCount] = useState(0);
  return (
    <div className='Counter' >
       <p id='para'>This is click {count} times</p>
       <button id='btn' onClick={()=>{setCount(count+1) }}>click me</button>
        
   
    </div>
  )
}

export default Com