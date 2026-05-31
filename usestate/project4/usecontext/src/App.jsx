import "./App.css";
import {createContext,useState} from"react";
import  ChildA  from "./componets/ChildA";


const UserContext=createContext()

// wrap all the chiled inside the provider.
function App() {
  const [user, setUser] = useState({name:"ajay"})
  return (
    <>
        <UserContext.Provider value={user}>
            <ChildA />
        </UserContext.Provider>

    </>
  )
}

export default App;
export {UserContext}

