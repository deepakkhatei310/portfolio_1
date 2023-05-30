import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg2 from "../components/MainImg2";
// import Heroprojects from "../components/Hero-project";
import Work from "../components/Work";
function Project (){
    return (
        <div>
         <Navbar/>
         <MainImg2 heading="Projects" text="Here I have shown some of my work"/>
         <Work/>
         <Footer/>
        </div>
    )
}
export default Project;