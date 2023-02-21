import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AddAnnouncements from './AddAnnouncements';
import AnnounceTable from './AnnounceTable';
import DeleteAnnouncement from './DeleteAnnouncements';
const Announcements = () => {

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
                    id : el.id,
                    announcements : el.announcements,
                    details : el.details
                }
            })
            setNews(newresponse)
            console.log(news)  
        }


        async function AddNewnews(newEntry){
            let response = await axios.post('http://127.0.0.1:8000/api/announcements/', newEntry);
            if (response.status === 201){
                return("nice")
            }
            getAnnouncements()
        }

        async function deleteAnnouncement(id){
            let response = await axios.delete(`http://127.0.0.1:8000/api/announcements/${id}/`);
            if (response.status === 204){
                getAnnouncements()

            }
            }


    
    return ( 
        <div>
            <AnnounceTable news = {news}/>
            <AddAnnouncements addnews = {AddNewnews}/>
            <DeleteAnnouncement removeannouncement = {deleteAnnouncement}/>
        </div>

    );
}
 
export default Announcements;