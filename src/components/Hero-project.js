// import { NavLink } from "react-router-dom";
import './ProjectStyle.css'
// import { useEffect } from "react";
// import TypewriterComponent from "typewriter-effect";
// import Aos from 'aos';
// import "aos/dist/aos.css"
function Heroprojects(props) {
    //  useEffect(() => {
    //   Aos.init({ duration: 3000})
    // }, [])
    return (
        <div className="project-card" data-aos='fade-right'>
        <img src={props.imgsrc} alt=""  width={"100%"}/>
        <h2 style={{color:"white"}}>{props.title}</h2>
        <div className="project-details">
            <p>{props.text}</p>
            <div className="pro-btns">
            {/* <NavLink className={"btn"}>View</NavLink>
            <NavLink className={"btn"}>Sources</NavLink> */}
            </div>
        </div>
    </div>
    )
}
export default Heroprojects;