
import './App.css'
import { useEffect,useState } from "react"

function App() {
  // const [count, setCount] = useState(0);

// v1 that use evey render:

//  useEffect(() => {
//    alert("every  render  ")
//  })

// only frist render:
// useEffect(() => {
//   alert("my frist render")
  
// }, [])

// the every render count is increce:
// useEffect(() => {
//   alert("my frist render")
  
// }, [count])


//  function handleclick() {
//   setCount(count+1)
  
//  }

 
  return(
    <div>
      {/* <button onClick={handleclick}>
        click me
      </button>
      <br />
      count is {count} */}
    </div>
  )
}

export default App
