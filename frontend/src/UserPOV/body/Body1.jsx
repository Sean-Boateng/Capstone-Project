import clock from "./bodyImages/clock.png"
import youtube3 from "./bodyImages/youtube3.png"
import location3 from "./bodyImages/location3.png"

import './body1.css'
import UserAnnouncements from "../UserAnnoouncements/UserAnnouncements"
import UserAnnouncementDetails from "../UserAnnoouncements/UserAnnouncementDetails"
import LatestVideo from "../../components/Youtube/LastestVideo"
const Body1 = () => {
    

    
    return ( 
        <body style={{backgroundColor: "white"}}>
            <div className='div1'> 
                <div className="group1">  
                    <span className="welcome">WEL<span className="c">C</span>OME</span>
                    <div className="message1">JOIN US IN-PERSON OR ONLINE EVERY SUNDAY AT 9:30 AM CST AND AT 12:30PM CST</div>
                </div>
                <div className='div2'>
                <div class="grid-container">

                    

                    <div class="grid-item item1"><img className="clock" src={clock} alt="" /></div>
                    <a href="https://www.youtube.com/@ToureRoberts"> <div class="grid-item item2"><img className="youtube" src={youtube3} alt=""  /></div></a>
                    <div class="grid-item item3"><img  className="location" src={location3} alt="" /></div>  
                    <div class="grid-item item4"><div className="message2">JOIN US IN-PERSON OR ONLINE <br/>EVERY SUNDAY AT 9:30 AM CST<br/>AND AT 12:30PM CST</div></div>
                    <div class="grid-item item5"><div className="message3">CLICK HERE TO VISIT OUR YOUTUBE CHANNEL</div></div>  
                    <div class="grid-item item6"><div className="message2">4132 Park Avenue<br/>Bronx,NY-10457</div></div>  
                            
                </div>
            </div> 
            </div>


            <div className="div4">
                <div>
                    <div className="box1">
                        <a href="/news">
                            <div className="sectionIntro">Click below to find the lastest news and much more</div>
                            <span className="section" >
                                
                                ANNOUNCEMENT
                            </span>
                        </a>
                    </div>

                    <div className="box2">
                        {/* <div className="sectionIntro">Click below to see our upcomig events</div> */}
                        <a href="/calendardisplay">
                            <span className="section">Events/Calendar</span>
                        </a>
                    </div>

                    <div>
                        
                        <div className=" container videodiv">
                            <LatestVideo/> 
                            <div >Here is where I will have the preacher name and sermon title</div>  
                        </div>
                        {/* <div className=" container videodiv2">
                            <LatestVideo/>   
                        </div> */}
                        </div>
                </div>

                
                
                    
                
                    
                </div>
            <div>
                
            </div>

            
            
        </body>
     );
}

export default Body1;
// className='div1'