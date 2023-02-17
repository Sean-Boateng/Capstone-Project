import axios from "axios";
import React, { useState, useEffect } from 'react';

 const WelcomeVideo = () => {

    return ( 
        <div className="videopage">
           
            <div>

                    <iframe id="ytplayer" 
                    type="text/html" 
                    width="540" 
                    height="360"
                    src={`https://www.youtube.com/embed/d18FdIDJCUY?autoplay=1&origin=http://example.com`}
                    frameBorder="0" style={{borderRadius:"30px"}}>
                    </iframe>
                    

            </div>
           
        </div>
     );
 }
  
 export default WelcomeVideo;