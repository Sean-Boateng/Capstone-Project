import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AllVideos = (props) => {
    const[videoid,setvideoId]=useState([]);

    useEffect(()=>{
        getVideoId();     
    }, [])

    async function getVideoId(){
        let response = await axios.get(`http://127.0.0.1:8000/api/videoid/`)
        console.log(response.data)
        
        setvideoId(response.data) 
        console.log(videoid) 
    }

    async function addVideoId(newEntry){
        let response = await axios.post(`http://127.0.0.1:8000/api/videoid/`,newEntry)
        if (response.status === 201){
            await getVideoId()
          }
          
    }


    function addId(info){
        // info.preventDefault();
        let newEntry = {
            videoid:videoid
        };
        console.log(newEntry)
        addVideoId(newEntry)
    }




    
    return ( 
        
            <form onSubmit ={addId}>
                <label>ID</label>
                <input  style={{color: 'black'}} type='string' value ={videoid} placeholder="video id" onChange={(info)=>setvideoId(info.target.value)}/>
                <button type='submit' >Add</button>
            </form>
        
     );
}
 
export default AllVideos;