import axios from "axios";
import React, { useState, useEffect } from 'react';

import AddMembers from "./AddMembers";
import DeleteMember from "./DeleteMember";
import MembersTable from "./MembersTable";
import UpdateMember from "./UpdateMember";
const Members = (props) => {
    const [members, setMembers]=useState([]);
    const [id, setId]=useState([]);
    


    useEffect(()=>{
        getAllMembers();     
    }, [])
    

    async function getAllMembers(){
        let response = await axios.get(`http://127.0.0.1:8000/api/members/`);
        let newresponse = (response.data).map(function(el){
            return {
                id : el.id,
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

    async function addNewMember(newEntry){
        console.log(newEntry)
        let response = await axios.post(`http://127.0.0.1:8000/api/members/`, newEntry);
        if (response.status === 201){
            await getAllMembers()
          }
          setMembers(response)
        
    }
    
    function catchId(id){
        setId(id)
        console.log(id)
    }

    async function updateMember(newEntry){
        console.log(id)
        console.log(newEntry)
        let response = await axios.put(`http://127.0.0.1:8000/api/members/${id}/`, newEntry)
    }



    async function deleteMember(id){
        let response = await axios.delete(`http://127.0.0.1:8000/api/members/${id}/`);
        if (response.status === 204){
            return('Delete Successful')
        } }





    return ( 
        <div>
            <MembersTable listOfMembers = {members}/>
            <AddMembers addmember = {addNewMember}/>
            <DeleteMember removemember = {deleteMember}/>
            <UpdateMember thisid = {catchId} updateInfo={updateMember}/>
        </div>
     );
}
 
export default Members;
