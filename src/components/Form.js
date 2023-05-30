import React from 'react'
import './formStyle.css'
import { useState } from 'react'
import emailjs from "emailjs-com"
const Form = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    // const [msg, setmsg] = useState("")
    const [des, setdes] = useState("")

     const send_email = (e)=>{
      e.preventDefault()
      const data = {
        from_name: name,
        from_email: email,
        message:des
      }
      const Service_id='service_zg6syfc'
      const Template_id='template_ftioq1c'
      const user_id = "sJLoqYtx6yHC1gaF2"

      emailjs.send(Service_id,Template_id,user_id,data).then((response)=>{
       console.log(response)
      }).catch((err)=>{
          console.log(err)
      })
     }
  return (
    <div className='form'>
        <form>
        
        <label>Your Name</label>
            <input type="text" name="" id="" placeholder='Name' onChange={(e)=>{setname(e.target.value)}}/>
        <label>Email</label>
            <input type="email" name="" id="" placeholder='Email' onChange={(e)=>{setemail(e.target.value)}}/>
        <label htmlFor="">Subject</label>
            <input type="text" name="" id="" placeholder='Subject' />
        
            {/* onChange={(e)=>{setmsg(e.target.value)}} */}
        
        <label htmlFor="">Message</label>
            <textarea rows="6" placeholder='Your messages' onChange={(e)=>{setdes(e.target.value)}}></textarea>
        <button className='btn' onClick={send_email}>Submit</button>
        
        
        </form>
    </div>
  )
}

export default Form