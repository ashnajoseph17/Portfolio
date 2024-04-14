import React, { useEffect,useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import "./styles/Navbar.css"
import ReorderIcon from '@material-ui/icons/Reorder'
function Navbar() {
    const[expendNavbar,setExpendNavbar] = useState(false);
    const location = useLocation()
    useEffect(()=>{
        setExpendNavbar(false);
    },[location])

    
  return (
    <div className='navbar' id = {expendNavbar? "open" : "close"}>
      <div className='toggleButton'> 
      <button onClick={() => {
      setExpendNavbar((prev) => !prev)}}> 
        <ReorderIcon/>
      </button>
      </div>
      <div className="links shift">
        <Link to = "/"> Home </Link>
        <Link to = "/Projects"> Projects </Link>
        <Link to = "/Experience"> Education </Link>

      </div>
    </div>
  )
}

export default Navbar
