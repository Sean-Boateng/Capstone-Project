import React, { useState } from 'react';
import Navbar2 from '../NavBar/navbar2';
import "./About.css"
import pastor1 from "./aboutpics/pastor1.jpg"
import person1 from "./aboutpics/person1.jpg"
import person2 from "./aboutpics/person2.jpg"
import person3 from "./aboutpics/person3.jpg"
import person4 from "./aboutpics/person4.jpg"
import person5 from "./aboutpics/person5.jpg"
const About = () => {

    return ( 
        <div>
            <Navbar2/>
        <div className='adiv container pastorbio'>
            <div class="row" className='bio'>
                <div class="col-9"><h1 style={{marginBottom:"20px"}}>About our Pastors</h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo et quos dolores deserunt optio recusandae maiores, molestiae eligendi deleniti porro, laboriiii<br/>iiosam soluta est! Maiores vero solutadoloremqueperspiciatisreprehendii<br/>erit voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Atque quas commodi architecto magnam? Accusantium harum <br/>quaerat perspiciatis maxime ipsa culpa, ad blanditiis quod? <br/>Officia optio corrupti tempora fugiat aliquam quod!</div>
                <div class="col-5"><img style={{marginTop:"85px"}} className='aimg1' src={pastor1} alt="" /></div>
                
            </div>
        </div>

        <div className='container' style={{backgroundColor: "rgb(210, 210, 210)"}}>
            <div>
                <div className='executive'>Executive Staff</div>
                <div class="about-container " >
                        <div class="about-item item1">
                            <img  className='aitem1' src={pastor1} alt="" />
                            <div>Pastors Mike and Mia</div>
                            <div>Lead Pastors</div>
                        </div>
                        <div class="about-item item2">
                            <img  className='aitem1' src={person1} alt="" />
                            <div> Natalie A</div>
                            <div>Executive Pastor</div>
                        </div>
                        <div class="about-item item3">
                            <img  className='aitem1' src={person2} alt="" />
                            <div>Gerald B</div>
                            <div>Executive Pastor</div>
                            </div>  
                        <div class="about-item item4">
                            <img className='aitem1' src={person3} alt="" />
                        </div>
                        <div class="about-item item5">
                            <img className='aitem1' src={person4} alt="" />
                        </div>  
                        <div class="about-item item6">
                            <img className='aitem1' src={person5} alt="" />
                        </div>  
                        <div class="about-item item7">
                            <div>Robert Dawney C</div>
                            <div>Executive Pastor, Music</div>
                        </div>  
                        <div class="about-item item8">
                            <div>Ryan D</div>
                            <div>Executive Pastor, Operations</div>
                        </div>  
                        <div class="about-item item9">
                            <div>Vanessa E</div>
                            <div>Executive Pastor</div>
                            </div>  
                        {/* <div class="about-item item10">pbdui</div>  
                        <div class="about-item item11">pbdui</div> 
                        <div class="about-item item12">pbdui</div> 
                        <div class="about-item item13">pbdui</div> 
                        <div class="about-item item14">pbdui</div> 
                        <div class="about-item item15">pbdui</div>  */}
                                
                    
                </div>
            </div>
        </div>
       
       
    </div>
     );
}
 
export default About;