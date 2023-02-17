import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventFlyers.css'
import Navbar2 from '../NavBar/navbar2';
const Pictures = (props) => {
    const[info,setInfo] = useState([]);


    useEffect(()=>{
        getAllPictures();     
    }, [])

    async function getAllPictures(){
        let response = await axios.get(`http://127.0.0.1:8000/api/pictures/all`)
        console.log(response.data)
        setInfo(response.data)
        
    }

    return ( 
        <div className='efpage'>
            <Navbar2/>
            <div className='intro'>
                Upcoming Events
            </div>

            <div class="row" style={{marginTop:"20px"}}>
                <div class="col-sm-1" style={{color:'white'}}>
                    
                </div>

                <div class="col-sm testing">
                    {info.map((el)=>{
                        return(
                            <div className='block'>
                                <div className="flyerset">
                                    <img className="flyerimg" src={"http://127.0.0.1:8000"+el.image} alt=""/>
                                    <div className="flyername">{el.name}</div>
                                    <div className="flyerdate">{el.date}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div class="col-sm-1" style={{color:'white'}}>
                    
                </div>
            </div>   
        </div>
    );
}
 
export default Pictures;
 