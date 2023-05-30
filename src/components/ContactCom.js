import './contactStyle.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
function ContactCom(props) {
    useEffect(() => {
          Aos.init({ duration: 2000})
        }, [])
    return (
        <div className="phone" style={{textAlign:"center"}} data-aos='fade-up'>
            <div className="icon">{props.logo}</div> 
            <p>{props.head}</p>
            <Link to={props.url}><p>{props.text}</p></Link> 
        </div>
    )
}
export default ContactCom;