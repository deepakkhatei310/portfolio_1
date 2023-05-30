
import MainImg2 from "../components/MainImg2";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Contactdetails from "../components/Contactdetails";
import Footer from "../components/Footer";
function Contact (){
    return (
        <div>
        <Navbar/>
        <MainImg2 heading="CONTACT" text="Lets's have a chat"/>
        <Contactdetails/>
        <Form/>
        <Footer/>
        </div>
    )
}
export default Contact;