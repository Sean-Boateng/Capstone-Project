import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar2 from '../NavBar/navbar2';
import "./About.css"
import pastor1 from './aboutpics/pastor1.jpg'
import pastor2 from './aboutpics/pastor2.jpg'

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

            <div className='aboutdiv1'>
                <div className='aboutdiv1text'>
                    <div>We Are Family</div>
                </div>  
            </div>

            <div className='aboutdiv2'>
                <div className='aboutdiv2text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, odio 
                    eos error nostrum tempora, soluta aliquam tenetur illum sint obcaecati 
                    dolorum unde facere, cumque voluptas sed. Minima accusantium possimus alias.
                    Numquam, repudiandae porro. Reprehenderit ipsa accusantium praesentium, animi, 
                    aperiam quisquam architecto, debitis consequuntur nihil atque sint molestias i
                    psum magnam harum? Enim sed delectus accusantium obcaecati quae libero eaque qu
                    isquam ex?
                </div>
            </div>
            <div className='learn'>Learn more about our leaders</div>
            <div className='aboutdiv3'>
                <div className='imgandname'>
                    <img className='aboutdiv3img' src={pastor1} alt="" style={{marginRight:"70px"}} />
                    <div style={{marginRight:"70px"}}>Mo Bamba</div>
                </div>
                <div className='imgandname'>
                    <img className='aboutdiv3img' src={pastor2} alt="" style={{marginLeft:"70px"}}/>
                    <div style={{marginLeft:"70px"}}>Jenny Ortega</div>
                </div>
            </div>
       
        
       
        </div>

     );
}
 
export default About;

 {/* <div className='container' style={{backgroundColor: "rgb(210, 210, 210)"}}>
            <div>
                <div className='executive'>Executive Staff</div>
                {pictures.map((el)=>{
                    return(
                        <div className='about-containerx'>
                            <div class=" about-item">
                                <img  className='aitem1' src={"http://127.0.0.1:8000"+el.image} alt="" />
                                <div>{el.name}</div>
                                <div>{el.role}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> */}









