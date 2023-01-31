import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!




const DisplayCalendar = (props) => {
    const[data,setData]= useState([]);
    // setData(props.data)

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
        <div className='container'>
           
            <FullCalendar
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
                        events={data}
            />
        </div>
       
     )
}
 
export default DisplayCalendar;
