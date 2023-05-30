import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'
import {FaBars, FaTimes} from "react-icons/fa"
const Navbar = () => {
 const [click, setclick] = useState(false)
 const [color, setcolor] = useState(false)
 
 const handleclick = ()=>setclick(!click)
 
 const handlecolor = ()=> {
    if(window.scrollY >= 50){
        setcolor(true)
    }
    else{
        setcolor(false)
    }
 }
 
 window.addEventListener("scroll", handlecolor)

  return (
    <div className={color? "header header-bg": "header"}>
      <div className="logo">
        <Link to={'/'}> <h1>Portfoli<span style={{color:"yellow"}}>O</span></h1> </Link>
      </div>
      <ul className={click? "nav-menu active":"nav-menu"}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/project'>Project</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleclick}>
      {click ?<FaTimes size={"20"} style={{color:"white"}}/>:
       <FaBars size={'20'} style={{color:"white"}}/>
      }

       
      </div>
    </div>
  )
}

export default Navbar