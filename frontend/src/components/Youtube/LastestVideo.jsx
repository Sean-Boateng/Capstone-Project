import React, { useState } from 'react';

const LatestVideo= () => {

    return ( 
        <div>
        <iframe id="ytplayer" 
                type="text/html" 
                width="640" 
                height="360"
                src={`https://www.youtube.com/embed/piIWrwhOb_4?autoplay=1&origin=http://example.com`}
                frameBorder="0">
                </iframe>
        </div>
     );
}
 
export default LatestVideo;