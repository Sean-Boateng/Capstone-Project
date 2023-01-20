import React, { useState } from 'react';

const AddAnnouncements = (props) => {

    const[announcements,setAnnouncements]=useState('')
    const[details,setDetails]=useState('')
    


    function addNewnews(info){
        info.preventDefault();
        let newEntry = {
            announcements: announcements,
            details: details,
            
        };
        console.log(newEntry)
        props.addnews(newEntry)
    }
    return ( 
        <form onSubmit ={addNewnews}>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>announcements</label>
            <input  style={{color: 'black'}} type='string' value ={announcements} onChange={(info)=>setAnnouncements(info.target.value  )}/><br/>

            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}> details</label>
            <input style={{color: 'black'}} type= 'string' value ={details} onChange={(info)=>setDetails(info.target.value)}/><br/>

            
            <button type='submit' >Add</button>
        </form >
     );
}
 
export default AddAnnouncements;