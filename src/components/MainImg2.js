import React from 'react'
import './MainImg2Style.css'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
const MainImg2 = (props) => {
   useEffect(() => {
      Aos.init({ duration: 3000})
    }, [])
  
  return (
    <div className='hero-img'>
      <div className="heading">
        <h1 data-aos='fade-left'>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default MainImg2