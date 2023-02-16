import axios from "axios";
import React, { useState, useEffect } from 'react';

const EventFlyer = (props) => {

    const[data, setData] = useState('')

    useEffect(()=>{
        getAllFlyers();     
    }, [])
    

    async function getAllFlyers(){
        let response = await axios.get(`http://127.0.0.1:8000/api/ef/`);
        console.log(response.data)
    }

    return ( 
        <div>
            Hello World
        </div>
     );
}
 
export default EventFlyer;