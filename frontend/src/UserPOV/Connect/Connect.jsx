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
            <div className="container connectpage">
                    
                        <div className="toppage">
                            <WelcomeVideo/>
                            <div>
                                <span className="welvidtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quasi, eum, illum non nihil repellendus magni expedita, rem maxime perspiciatis magnam sit facilis itaque minima? Minima odit ad tenetur delectus!</span>
                            </div>
                        </div>
                    

                <div>Listed below are our socials. Click to keep up with what happens.</div>
                <div className="socials">
                    <a href="https://www.instagram.com/replibusa/?hl=en"><img src={insta} alt="" /></a>
                    <a href="https://www.facebook.com/REPLIBUSA"><img src={fb} alt="" /></a>
                </div>
                <div style={{paddingBottom:"20px"}}>If you have any concerns or are looking to become a member, please reach out. We'll get back to you as soon as possible!</div>
                
                <div>
                    <ContactUs/>
                </div>
            </div>
        </div>
    );
}
 
export default Connect;