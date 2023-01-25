import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import AddEvent from './AddEvent';



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

    async function addEvent(newEntry){
        let response = await axios.post(`http://127.0.0.1:8000/api/events/`, newEntry);
        if (response.status === 201){
            await getAllEvents()
          }
          setData(response)
    }

    return ( 
        <div>
            
            
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                weekends={true}
                events={data}
             />
             <AddEvent addevent={addEvent}/>
            </div>
     );
}
 
export default Calendar;