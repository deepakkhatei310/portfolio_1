import React from 'react'
// import Myimg from '../assets/SAVE_20211020_132556.jpg'
import { useEffect } from 'react'
import './AboutMeStyle.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const AboutMe = () => {

  useEffect(() => {
    Aos.init({ duration: 2000})
  }, [])

  return (
    <div className='about-me'>
       <h1>About Me</h1>
      <div className="about-details" data-aos="fade-down">
        <div className="personal-details">
         <h3 style={{color:"white"}}>Personal Details</h3>
         <p>Email:<span style={{color:"yellow"}}>deepakkhatei310@gmail.com</span></p>
         <p>Language: <span>English</span> </p>
         <p>Nationality: <span>Indian</span> </p>
        </div>
        <div className="descrpitons">
        <h3 style={{color:"white"}}>I Am A aspiring <span style={{color:"yellow"}}>Full stack Webdeveloper</span> </h3>
        <p>My name is Deepak Kumar khatei , I am from odisha, I am a aspiring web developer with the ability to learn and collaborate in rapidly changing environments and compositions. Which have knowladge of Full stack technology like Html, Css,Bootstrap5, JavaScript, ReactJs, MySql  </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe