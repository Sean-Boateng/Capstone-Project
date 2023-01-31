import WelcomeVideo from "../../components/Youtube/WelcomeVideo";
import Navbar2 from "../NavBar/navbar2";
import "./Connect.css"
import insta from "./connectimgs/insta.png"
import fb from "./connectimgs/fb.png"
import { ContactUs } from "../../components/Email/ContactUs";

const Connect = (props) => {

    return ( 
        <div>
            <Navbar2/>
            <div className="container connectpage" >

                <div className="toppage">
                    <WelcomeVideo/>
                    <div className="textenvi"><span className="welvidtext">HERE IS A MESSAGE FROM OUR VERY OWN, PASTOR ROBERTS, WELCOMING YOU TO OUR HOME, OUR FAMILY.</span></div>
                </div>
                <div>Listed below are our socials. Click to keep up with what happens.</div>
                <div className="socials">
                    <a href="https://www.instagram.com/replibusa/?hl=en"><img src={insta} alt="" /></a>
                    <a href="https://www.facebook.com/REPLIBUSA"><img src={fb} alt="" /></a>
                </div>
                <div style={{paddingBottom:"20px"}}>If you have any concerns or are looking to become a member, please click here . We'll get back to you as soon as possible!</div>
                
                <div>
                    <ContactUs/>
                </div>
            </div>
        </div>
    );
}
 
export default Connect;