import { FaBook } from 'react-icons/fa';
import './EduStyle.css'
import Html from '../assets/html5.4e6edfe05f07c383e94f.png'
import Css from '../assets/css3.845e8eb63836bef093cf.png'
import JavaS from '../assets/js.3dfb665e058d08c99f28.png'
import bootS from '../assets/bootstrap-stack.png'
import django from '../assets/django-11-1175036.webp'
import sql from '../assets/mysql-5-logo-png-transparent.png'
import react from '../assets/react.22d1f2096ed82cab7a8a.png'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
function Education() {
    useEffect(() => {
      Aos.init({ duration: 3000})
    }, [])
    
    return (
        <div className="education" id='education'>
        <h1 style={{textAlign:"center",marginBottom:"30px"}} data-aos="fade-right">Eduaction and qualifications</h1>
           <div className="schooling" data-aos="fade-right">
            <h2> <span> <FaBook style={{size:"20px"}}/> </span>  Education and Qualification</h2>
             <div className="summery">
                <div className="one">
                <div className="s-year">
                    <h3>2022-2023</h3>
                </div>
                    <div className="s-details">
                        <h2>Full Stack Web Development</h2>
                        <p>Full stack development is the end-to-end development of applications. It includes both the front end and back end of an application. In this training period i learned a lot of technologies in like Html, css , Bootstrap ,Js and React js in frontend and Django,Mysql in backend.</p>
                    </div>
                </div>
                <div className="one">
                    <h3>2018-2021</h3>
                    <div className="s-details">
                        <h2>Niis Group of Institution</h2>
                        <p>I have completed my graduation in B.sc ITM (Information technology and Management), with 7.34 CGPA. In this period I explored many fieald like software and hardware that's how i developed intrest in Web developement</p>
                    </div>
                </div>
                <div className="one">
                    <h3>2016-2018</h3>
                    <div className="s-details">
                        <h2>G.M Mahavidalya</h2>
                        <p>I did my 12th in science stream with pcm(physics, chemistry, Math) and optional it(Infomation technology) subjects,with 51 percantage. Since my childhood i am always intrested in New gadget and technology. So thats how after completed my 12th i took admisson in B.sc ITM .</p>
                    </div>
                </div>
             </div>
           </div>
           <div className="skills">
            <div className="skill-heading" style={{marginBottom:"1rem"}}>
                <h1>SKILLS</h1>
            </div>
            <div className="skill-cards" data-aos="fade-up">
                <div className="card">
                    <img src={Html} alt=""  height={"70px"} width={"70px"}/>
                    <p>HTML</p>
                </div>
                <div className="card">
                <img src={Css} alt=""  height={"70px"} width={"70px"}/>
                <p>CSS</p>
                </div>
                <div className="card">
                <img src={JavaS} alt=""  height={"70px"} width={"70px"}/>
                <p>Javascript</p>
                </div>
                <div className="card">
                <img src={bootS} alt=""  height={"70px"} width={"70px"}/>
                <p>Bootstarp5</p>
                </div>
                <div className="card">
                <img src={react} alt=""  height={"70px"} width={"70px"}/>
                <p>ReactJs</p>
                </div>
                <div className="card">
                <img src={sql} alt=""  height={"70px"} width={"70px"}/>
                <p>MqSql</p>
                </div>
                <div className="card">
                <img src={django} alt=""  height={"70px"} width={"70px"}/>
                <p>Django</p>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Education;