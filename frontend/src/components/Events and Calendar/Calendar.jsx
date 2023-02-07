import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


import AddEvent from './AddEvent';
import DisplayCalendar from './DisplayCalendar';
import DeleteEvent from './DeleteEvent';
import EventsTable from './EventsTable';





const Calendar = () => {
    const [data, setData] = useState([])


    useEffect(()=>{
        getAllEvents();     
    }, [])

    async function getAllEvents(){
        let response = await axios.get(`http://127.0.0.1:8000/api/events/`);
        let newresponse =(response.data).map(function(el){
            return {
                id : el.id,
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
        //   setData(response)
    }

    async function deleteEvent(id){
        let response = await axios.delete(`http://127.0.0.1:8000/api/events/${id}/`);
        if (response.status === 204){
            return('Delete Successful')
        } }

    return ( 
        <div>
            <FullCalendar
                    events={data}
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    weekends={true}
                    eventClick={
                        function(arg){
                            debugger
                            alert(arg.event.title)
                            
                            alert(`${arg.event.title} will be happening live on ${arg.event.startStr}` )
                        }
                    }
                    
                    
                />
            
            
            <AddEvent addevent={addEvent}/>
            <EventsTable data = {data}/>
            <DisplayCalendar data={data}/>
            <DeleteEvent removeevent={deleteEvent}/>
            
            
            </div>
     );
}
 
export default Calendar;