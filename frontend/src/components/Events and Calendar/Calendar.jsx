import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!



const Calendar = () => {
    const [event, setEvent] = useState([])
    const [data, setData] = useState([])


    useEffect(()=>{
        getAllEvents();     
    }, [])

    async function getAllEvents(){
        let response = await axios.get(`http://127.0.0.1:8000/api/events/`);
        let newresponse =(response.data).map(function(el){
            return {
                title: el.name,
                date : el.date_of_event,
            }
        })
        setData(newresponse)
        console.log(data);
  
    }

    return ( 
        <div>
            
            
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                weekends={true}
                events={data}
             />
                </div>
     );
}
 
export default Calendar;