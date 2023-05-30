import './Footerstyle.css'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
      <div className="copyright">
      <p> © Copyright <strong>portfolio</strong> </p>
      </div>
      <div className="credits">
        <p>Created and Designed By Deepak</p>
      </div>
      <div className="icons">
        <Link to='/'>
        <FaHome style={{color:"white"}}/>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Footer