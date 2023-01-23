import axios from "axios";
import React, { useState, useEffect } from 'react';
 const YoutubePlayer = () => {
    const [channelVideos, setChannelVideos] = useState([]);
    const [latestVideo, setLatest] = useState([]);

    useEffect(()=>{
         
        
        }, [])


   


    return ( 
        <div>
            <div>

                    <iframe id="ytplayer" 
                    type="text/html" 
                    width="640" 
                    height="360"
                    src={`https://www.youtube.com/embed/d18FdIDJCUY?autoplay=1&origin=http://example.com`}
                    frameBorder="0">
                    </iframe>

            </div>
            <div>
            <iframe id="ytplayer" 
                    type="text/html" 
                    width="640" 
                    height="360"
                    src={`https://www.youtube.com/embed/piIWrwhOb_4?autoplay=1&origin=http://example.com`}
                    frameBorder="0">
                    </iframe>
            </div>
        </div>
     );
 }
  
 export default YoutubePlayer;