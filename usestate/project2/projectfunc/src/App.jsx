import {useState} from 'react'
import './App.css'
import Card from  './componets/Card'

function App() {
  
  const [name, setName] = useState("");
  return (
    <div>
      <Card name={name} setName={setName}/>
      <p>chage in the parent :{name}</p>
    </div>
    
     
  )
}

export default App
