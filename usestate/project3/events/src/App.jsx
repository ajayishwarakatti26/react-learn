
import './App.css'

function App() {
  
  function handleClick(){
    alert(" i am click ");
  }

   
  function handleSubmit(e){
    e.preventDefault();
    alert(" i am click ");
  }

  function handleInput(e){
    console.log("valaue",e.target.value)
  }
  return (
   <div>

    

    {/* <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} />
      <button type="submit">Submit</button>
    </form> */}
    {/* <p onMouseOver={()=>{alert(" hello every one ..")}} style={{color:"red" ,border:" 1px solid black "}}>in hii</p>
    <button onClick={handleClick}>
      click me 
    </button> */}
   </div>
  )
}

export default App
