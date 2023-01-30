import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Navbar2 from '../NavBar/navbar2';
import UserAnnouncementTable2 from './UserAnnouncementTable2';





const UserAnnouncementDetails = () => {

    const [news, setNews] = useState([])
    const [info, setInfo] = useState([])

    useEffect(()=>{
        getAnnouncements();     
    }, [])


    async function getAnnouncements(){
            let response = await axios.get(`http://127.0.0.1:8000/api/announcements/`)
            console.log(response.data)
            let newresponse = (response.data).map(function(el){
                return{
                    announcements : el.announcements,
                    details : el.details
                }
            })
            setNews(newresponse)
            console.log(news)  
        }


       


    
    return ( 
        <div>
            <Navbar2/>
            <UserAnnouncementTable2 news = {news}/>
            
            
        </div>

    );
}
 
export default UserAnnouncementDetails;