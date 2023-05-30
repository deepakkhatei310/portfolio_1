import { FaPhone , FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa'
const ContactData = [
    {
        head:"Phone",
        text:"+91 7978813533",
        url: +917978813533,
        logo: <FaPhone size={"30"} style={{color:"white"}}/>
    },
    {
        head:"Email",
        text:"deepakkhatei310@gmail.com",
        url:"https://mail.google.com/",
        logo: <FaEnvelope size={"30"} style={{color:"white"}}/>
    },
    {
        head:"Linkdin",
        text:"View my profile",
        url:"https://www.linkedin.com/in/deepak-kumar-khatei-b73903218/",
        logo:<FaLinkedin size={"30"} style={{color:"white"}}/>
    },
    {
        head:"Github",
        text:"View my works here",
        url: "https://github.com/",
        logo:<FaGithub size={"30"} style={{color:"white"}}/>
    }
    

]
export default ContactData ;