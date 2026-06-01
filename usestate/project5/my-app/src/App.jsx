
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componets/Home"
import About from "./componets/About";
import Dashbord  from "./componets/Dashbord";
import Navbar from "./componets/Navbar";


const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>,

    },
    
    {
      path:"/about",
      element:
       <div>
        <Navbar/>
        <About/>
      </div>,
    },

    {
      path:"/dashboard",
      element:
       <div>
        <Dashbord/>
        <Home/>
      </div>,
    },


  ]
);


function App() {
  
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
