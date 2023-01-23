import axios from "axios";
import React, { useState, useEffect } from 'react';

import AddMembers from "./AddMembers";
import MembersTable from "./MembersTable";
const Members = (props) => {
    const [members, setMembers]=useState([]);

    useEffect(()=>{
        getAllMembers();     
    }, [])
    

    async function getAllMembers(){
        let response = await axios.get(`http://127.0.0.1:8000/api/members/`);
        let newresponse = (response.data).map(function(el){
            return {
                firstName : el.first_name,
                lastName : el.last_name,
                DOB : el.date_of_birth,
                address : el.address,
                email : el.email
            }
        })
        setMembers(newresponse)
        console.log(members)
    }

    async function addNewMebers(newEntry){
        let response = await axios.get(`http://127.0.0.1:8000/api/members/`, newEntry);
        if (response.status === 201){
            await getAllMembers()
          }
          setMembers(response)
        
    }

    return ( 
        <div>
            <MembersTable listOfMembers = {members}/>
            <AddMembers addmember = {addNewMebers}/>
        </div>
     );
}
 
export default Members;
