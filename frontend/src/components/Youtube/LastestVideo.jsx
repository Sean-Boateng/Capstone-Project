import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./youtube.css"
import { pointInsideRect } from '@fullcalendar/core/internal';



const LatestVideo= () => {
    const[id,setId]=useState([]);
    const[speaker,setSpeaker]=useState([]);
    const[title,setTitle]=useState([]);

    useEffect(()=>{
        getVideoId();     
    }, [])

    async function getVideoId(){
        let response = await axios.get(`http://127.0.0.1:8000/api/videoid/`)
        console.log(response.data[response.data.length-1].videoid)
        
        setId(response.data[response.data.length-1].videoid) 
        setSpeaker(response.data[response.data.length-1].speaker) 
        setTitle(response.data[response.data.length-1].title) 
        console.log(id)
        console.log(speaker)
        console.log(title)
    }


    

    return ( 
        <div>

            

            <div className=" row videoboard">

                <div className="col-md-1 "></div>
                
                <div className="col-md-4 ">
                <iframe 
                id="ytplayer" 
                    type="text/html" 
                    width="640" 
                    height="460"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`}
                    frameBorder="0" style={{borderRadius:"30px"}}>
                </iframe>
                </div>

                <div className="col-md-2"></div>

                <div className="col-md-4 videotext">
                    <span style={{fontSize: "30px"}}>Sermon Title:</span>
                   <span className="messagetitle"><b>{title}</b> </span>
                   <span style={{fontSize: "30px"}}>Speaker:</span>
                   <span className="messagespeaker"><b>{speaker}</b></span>
                </div>

                <div className="col-md-1"></div>
                
            </div> 

        </div> 
            
     );
}
 
export default LatestVideo;