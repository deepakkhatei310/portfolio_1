import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg2 from "../components/MainImg2";
// import Education from "../components/Education";
import AboutMe from "../components/AboutMe";
function About (){
    return (
        <div>
         <Navbar/>
         <MainImg2 heading="ABOUT." text="I Am Deepak .A aspiring fullstack web developer"/>
         {/* <Education/> */}
         <AboutMe/>
         <Footer/>
        </div>
    )
}
export default About;