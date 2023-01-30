import time3 from "./bodyImages/time3.png"
import youtube3 from "./bodyImages/youtube3.png"
import location3 from "./bodyImages/location3.png"
import calendar from "./bodyImages/calendar.png"
import './body1.css'
import UserAnnouncements from "../UserAnnoouncements/UserAnnouncements"
import UserAnnouncementDetails from "../UserAnnoouncements/UserAnnouncementDetails"
const Body1 = () => {
    
    
    return ( 
        <body>
            <div className='div1'> 
                <div className="group1">  
                    <span className="welcome">WEL<span className="c">C</span>OME</span>
                    <div className="message1">JOIN US IN-PERSON OR ONLINE EVERY SUNDAY AT 9:30 AM CST AND AT 12:30PM CST</div>
                </div> 
            </div>

            <div className='div2'>
                <div class="grid-container">
                    <div class="grid-item item1"><img className="clock" src={time3} alt="" /></div>
                    <a href="https://www.youtube.com/@ToureRoberts"> <div class="grid-item item2"><img className="youtube" src={youtube3} alt="" /></div></a>
                    <div class="grid-item item3"><img  className="location" src={location3} alt="" /></div>  
                    <div class="grid-item item4"><div className="message2">JOIN US IN-PERSON OR ONLINE <br/>EVERY SUNDAY AT 9:30 AM CST<br/>AND AT 12:30PM CST</div></div>
                    <div class="grid-item item5"><div className="message3">CLICK HERE TO VISIT OUR YOUTUBE CHANNEL</div></div>  
                    <div class="grid-item item6"><div className="message2">4132 Park Avenue<br/>Bronx,NY-10457</div></div>  
                            
                </div>
            </div>

            <div className="div4">
                <div className="check">CHECK OUT OUR<br/><span className="events">Events</span></div>
                    <div className="div3">
                        <div>
                            <div className="red">We make the effort to inform all members and visitors of our upcoming programs. Our media team ensures that the information found here is always up-to-date. Click the button below to view a list of our upcoming events in both calendar form and table.</div>
                            <a href="/stuff"><button  type="button" class="btn btn-primary" >More</button></a>
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