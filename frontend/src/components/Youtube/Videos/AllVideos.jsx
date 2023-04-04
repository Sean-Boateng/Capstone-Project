import axios from "axios";
import React, { useState, useEffect } from 'react';
import AddVideoForm from "./AddVideoForm";


const NewVideos = (props) => {

    const[allid, setAllid]=useState([])


    useEffect(()=>{
        getAllVideoId();     
    }, [])

    async function getAllVideoId(){
        let response = await axios.get(`http://127.0.0.1:8000/api/videoid/`)
        console.log(response.data)
        setAllid(response.data)
    }

    async function addVideo(newEntry){
        let response = await axios.post('http://127.0.0.1:8000/api/videoid/', newEntry);
        if (response.status === 201){
            console.log('nice')
        }
        
        getAllVideoId()
    }

    

    return ( 
        <div>
            <AddVideoForm addvideo ={addVideo}/> 
        </div>
     );
}
 
export default NewVideos;
