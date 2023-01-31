import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar2 from '../NavBar/navbar2';
import "./About.css"
import pastor1 from "./aboutpics/pastor1.jpg"
import person1 from "./aboutpics/person1.jpg"
import person2 from "./aboutpics/person2.jpg"
import person3 from "./aboutpics/person3.jpg"
import person4 from "./aboutpics/person4.jpg"
import person5 from "./aboutpics/person5.jpg"

const About = (props) => {

const[pictures, setPictures]=useState([]);


useEffect(()=>{
    getPictures();     
}, [])


async function getPictures(){
    let response = await axios.get(`http://127.0.0.1:8000/api/pictures/all`)
    console.log(response.data)
    setPictures(response.data)
}

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
                {pictures.map((el)=>{
                    return(
                        <div className='row'>
                            <div class="col about-item">
                                <img  className='aitem1' src={"http://127.0.0.1:8000"+el.image} alt="" />
                                <div>{el.name}</div>
                                <div>{el.role}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
       
       
    </div>

     );
}
 
export default About;











        //     <table class="table">
    //     <thead>
          
    //     </thead>

    //     <tbody>
    //             
    //     </tbody>
    //   </table>
