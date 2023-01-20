import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Event = (props) => {

    const [event, setEvent] = useState('')


    useEffect(()=>{
        getAllEvents(); 
    }, [])

    async function getAllEvents(){
        let response = await axios.get(`http://127.0.0.1:8000/api/events/`);
        let newresponse = response.map(function(el){
            return {
                title: el.name,
                date : el.date_of_event
            }
        })
        console.log(newresponse)
        setEvent(newresponse)
    }

    return ( 
        <div>Helllllo</div>
     );
}
 
export default Event;