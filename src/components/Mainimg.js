import "./MainImg.css";
import { Link } from "react-router-dom";
import cover from '../assets/Cover.jpg'
import resume from '../assets/DeepakNewResume.pdf'
// import { FaArrowDown } from "react-icons/fa";
import { RxDoubleArrowDown } from "react-icons/rx";
import TypewriterComponent from "typewriter-effect";
function MainImg() {
  return (
    <div className="main">
      <div className="mask">
        <img className="into-img" src={cover} alt="" width={"100%"} />
      </div>
      <div className="content">
        <p style={{fontWeight:"600", fontSize:"30px"}}>HI, I AM <span style={{color:"yellow"}}>Deepak Kumar Khatei</span> </p>
        <h1><TypewriterComponent
          options={{
            strings: ["Full Stack Web Developer","FrontEnd Developer","BackEnd Developer"],
            autoStart: true,
            loop: true
          }}
        /></h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to={resume} download className="btn btn-light">
            Resume
          </Link>
        </div>
        <a href="#education"><RxDoubleArrowDown size="50" style={{color:"white", marginTop:"300px"}}/></a>
      </div>
    </div>
  );
}

export default MainImg;
