import UserCard from "./components/UserCard"
import "./App.css"

function App() {


  return (
    <div className="con">
        <UserCard name="ajay"  style={{"border-radius":"30px"}}/>
        <UserCard name="joy" />
        <UserCard name="bob" />
    </div>
  )
}

export default App
