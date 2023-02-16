import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar2 from '../NavBar/navbar2';
import "./About.css"
import minSiriboe from './aboutpics/minSiriboe.JPG'
import minfred from './aboutpics/minfred.JPG'
import deputy from './aboutpics/deputy.JPG'
import pasAmoako from './aboutpics/pasAmoako.JPG'
import Artboard1 from './aboutpics/Artboard1.png'

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
                
                <div className='aboutdiv1items'>
                    <div className='div1text'>
                        <span style={{color:'black', fontSize:'55px'}}>About Our Minister</span>
                        <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus veritatis mollitia quibusdam magni debitis,<br/> quis beatae. Molestias earum mollitia culpa sed, temporibus atque id voluptatibus dolorum rerum sint consequatur.
                        <br/>Provident omnis enim tempora molestiae? Praesentium deleniti amet sequi. Sint saepe atque, unde odit minus <br/>corrupti laboriosam ea dolorum deleniti laudantium excepturi! Voluptatem earum, beatae debitis assumenda<br/> libero aperiam ratione!
                    </div>

                    <div>
                        <img className='div1img' src={minSiriboe} alt="" />
                    </div>
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

            <div className='learn'>Executive Staff</div>

            <div className='aboutdiv3'>
                <div className='imgandname'>
                    <img className='aboutdiv3img' src={minfred} alt="" style={{}} />
                    <div style={{}}>Fred Karikari</div>
                    <div style={{color:'black', fontSize:'25px'}}>Executive Minister</div>
                </div>
                <div className='imgandname'>
                    <img className='aboutdiv3img' src={pasAmoako} alt="" style={{}}/>
                    <div style={{}}>Amoako Boateng</div>
                    <div style={{color:'black', fontSize:'25px'}}>Executive Pastor</div>
                </div>
                <div className='imgandname'>
                    <img className='aboutdiv3img' src={deputy} alt="" style={{}}/>
                    <div style={{}}>Richard Owusu</div>
                    <div style={{color:'black', fontSize:'25px'}}>Deputy,General Overseer</div>
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









