import ProjectcardData from './Workdata'
import Heroprojects from './Hero-project'
import './ProjectStyle.css'
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css"
function Work() {
    useEffect(() => {
        Aos.init({ duration: 1000})
      }, [])
    return (
    <div className="work-container">
         <h1 className="project-heading">Projects</h1>
        <div className="project-container">
         {
            ProjectcardData.map((val, ind)=>{
                return(
                    <Heroprojects
                     key = {ind}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     text={val.text}
                     view={val.view}
                    />
                )
            })
         }
        </div>
    </div>
    )
}
export default Work; 