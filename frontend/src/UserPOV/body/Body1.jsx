import clock from "./bodyImages/clock.png"
import youtube3 from "./bodyImages/youtube3.png"
import location3 from "./bodyImages/location3.png"
import speaker4 from "./bodyImages/speaker4.png"
import land1 from "./bodyImages/land1.jpg"
import land2 from "./bodyImages/land2.jpg"
import land3 from "./bodyImages/land3.jpg"


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
                    <div className="message1">JOIN US IN-PERSON OR ONLINE EVERY SUNDAY AT 9:30 AM EST AND AT 12:30 PM EST</div>
                </div>
                <div className='div2'>
                <div class="grid-container">

                    

                    <div class="grid-item item1"><img className="clock" src={clock} alt="" /></div>
                    <a href="https://www.youtube.com/@ToureRoberts"> <div class="grid-item item2"><img className="youtube" src={youtube3} alt=""  /></div></a>
                    <div class="grid-item item3"><img  className="location" src={location3} alt="" /></div>  
                    <div class="grid-item item4"><div className="message2">JOIN US IN-PERSON OR ONLINE <br/>EVERY SUNDAY AT 9:30 AM CST<br/>AND AT 12:30PM CST</div></div>
                    <div class="grid-item item5"><div className="message2">CLICK HERE TO VISIT OUR YOUTUBE CHANNEL</div></div>  
                    <div class="grid-item item6"><div className="message2">4132 Park Avenue<br/>Bronx, NY, 10457</div></div>  
                            
                </div>
            </div> 
            </div>



            <div className=" div4">
                <div className="row">

                    <div className="col-md-1"></div>

                        <div className=" col-md-4 box1" style={{marginBottom:"70px"}}> 
                            <div className="">
                                <div className="box1head">Announcement</div>
                                <div className="box1text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quisquam ipsam quas expedita, totam pariatur doloremque, doloribus molestias nostrum numquam voluptatum dolores corporis accusantium sapiente amet, sequi porro recusandae magnam.
                                Ipsam, molestiae esse! Sapiente dolores fuga laborum nulla quaerat? A possimus laboriosam illum ipsam deleniti adipisci, nihil vel? Neque explicabo ratione possimus, aspernatur voluptas expedita magnam exercitationem odit ad sapiente?
                                </div>
                                Click<a href="/news"><button style={{backgroundColor:"#ff8000", border: "#ff8000", marginLeft:'15px'}} class="btn btn-primary">Here</button></a>                       
                            </div>   
                        </div>

                        <div className="col-md-2"></div>


                        <div className="box2 col-md-4"style={{marginBottom:"70px"}}>

                            <div className="">
                                <div className="box1head">Events</div>
                                <div className="box1text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quisquam ipsam quas expedita, totam pariatur doloremque, doloribus molestias nostrum numquam voluptatum dolores corporis accusantium sapiente amet, sequi porro recusandae magnam.
                                Ipsam, molestiae esse! Sapiente dolores fuga laborum nulla quaerat? A possimus laboriosam illum ipsam deleniti adipisci, nihil vel? Neque explicabo ratione possimus, aspernatur voluptas expedita magnam exercitationem odit ad sapiente?
                                </div>
                                Click<a href="/ef"><button style={{backgroundColor:"#ff8000", border: "#ff8000", marginLeft:'15px'}} class="btn btn-primary">Here</button></a>                       
                            </div>                      
                        </div>

                    <div className="col-md-1"></div>
                </div>         
            </div>

            {/* <div className=" row videoboard">
                <div className="col-md-2 "></div>
                <div className="col-md-3 video"> */}
                   <LatestVideo/> 
                {/* </div>
                <div className="col-md-2"></div>
                <div className="col-md-3 videotext">
                    <span style={{fontSize: "30px"}}>Sermon Title:</span>
                   <span className="messagetitle"><b>He Won't Fail</b> </span>
                   <span style={{fontSize: "30px"}}>Speaker:</span>
                   <span className="messagespeaker"><b>Todd Galberth</b></span>
                </div>
                <div className="col-md-2"></div>
            </div> */}
                
            

            
            
        </body>
     );
}

export default Body1;
// className='div1'


{/* <a href="/news">
                            <div className="sectionIntro">Click below to find the lastest news and much more</div>
                            <span className="section" >
                                
                                ANNOUNCEMENT
                            </span>
                        </a> */}

                        // <a href="/ef">
                        //     <span className="section">Events</span>
                        // </a>