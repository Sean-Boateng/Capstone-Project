import { isPropsEqual } from '@fullcalendar/core/internal';
import React, { useState } from 'react';


const AddVideoForm = (props) => {

    const[videoid,setVideoID]=useState([]);
    const[speaker,setSpeaker]=useState([]);
    const[title,setTitle]=useState([]);

    function addId(info){
        info.preventDefault();
        let newEntry = {
            videoid:videoid
        };
        console.log(newEntry)
        props.addvideo(newEntry)
    }



    return ( 
        <form onSubmit ={addId}>
                <label>ID</label>
                <input  style={{color: 'black'}} type='string' value ={videoid} placeholder="video id" onChange={(info)=>setVideoID(info.target.value)}/>
                <label>Speaker</label>
                <input  style={{color: 'black'}} type='string' value ={speaker} placeholder="video id" onChange={(info)=>setSpeaker(info.target.value)}/>
                <label>Title</label>
                <input  style={{color: 'black'}} type='string' value ={title} placeholder="video id" onChange={(info)=>setTitle(info.target.value)}/>
                <button type='submit' >Add</button>
        </form>
     );
}
 
export default AddVideoForm ;