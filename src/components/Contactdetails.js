import React from 'react'
// import { Link } from 'react-router-dom'
import './contactStyle.css'
import ContactCom from './ContactCom'
import ContactData from './ContactData'
import './contactStyle.css'
function Contactdetails() {
  return (
    <div className='contact-details'>
     <h1 className='contact-head'>Contact me</h1>
     <div className="contact-icons">
     {
     ContactData.map((item, index)=>{
    return(
      <ContactCom
       key={index}
       head={item.head}
       text={item.text}
       logo={item.logo}
       url={item.url}
      />
      )
    })
}
</div>
    </div>
  )
}

export default Contactdetails