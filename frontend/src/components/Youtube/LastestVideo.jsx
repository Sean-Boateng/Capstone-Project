import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./youtube.css"
import { pointInsideRect } from '@fullcalendar/core/internal';



const LatestVideo= () => {
    const[id,setId]=useState([]);

    useEffect(()=>{
        getVideoId();     
    }, [])

    async function getVideoId(){
        let response = await axios.get(`http://127.0.0.1:8000/api/videoid/`)
        console.log(response.data[response.data.length-1].videoid)
        
        setId(response.data[response.data.length-1].videoid) 
        console.log(id) 
    }

    // Object.keys(id).forEach(key =>{
    //     console.log('key', key)
    //     console.log('value', id[key]);
    // })


   
    // let finalvalue = id.reduce((spread, grade)=>{
    //     let count = spread.get(grade) || 0;
    //     spread.set(grade, ++count);
    //     return spread;
    // }, new Map());
    // finalvalue = Array.from(finalvalue)
    // console.log(finalvalue)

    

    return ( 
        <div>

            <iframe 
            className='player'
            id="ytplayer" 
                    type="text/html" 
                    width="640" 
                    height="460"
                    
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`}
                    frameBorder="0" style={{borderRadius:"30px"}}>
            </iframe>
            
        </div>
     );
}
 
export default LatestVideo;