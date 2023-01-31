import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Pictures = (props) => {
    const[info,setInfo] = useState([]);


    useEffect(()=>{
        getAllPictures();     
    }, [])

    async function getAllPictures(){
        let response = await axios.get(`http://127.0.0.1:8000/api/pictures/`)
        console.log(response.data)
        setInfo(response.data)
        
    }

    return ( 
        <div></div>
     );
}
 
export default Pictures;