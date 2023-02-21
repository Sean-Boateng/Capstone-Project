import './form.css'

import React, { useState } from 'react';

const AddAnnouncements = (props) => {

    const[announcements,setAnnouncements]=useState('')
    const[details,setDetails]=useState('')
    


    function addNewnews(info){
        // info.preventDefault();
        let newEntry = {
            announcements: announcements,
            details: details   
        };

        console.log(newEntry)
        props.addnews(newEntry)
    }
    return ( 
        <form onSubmit ={addNewnews} className='announcementform' >
            <label className='announcementlabel'>Announcement</label>
            <textarea type='string' value ={announcements} placeholder="Announcement Headline" onChange={(info)=>setAnnouncements(info.target.value  )}className='announcementtextarea'/><br/>

            <label className='announcementlabel' style={{paddingBottom:'1rem' ,paddingRight:'1em'}}> Detail</label>
            <textarea className='announcementtextarea' placeholder="Explanation" type= 'string' value ={details} onChange={(info)=>setDetails(info.target.value)}/><br/>

            <button type='submit' style={{margin:"5px"}}>Add</button>
        </form >
     );
}
 
export default AddAnnouncements;
