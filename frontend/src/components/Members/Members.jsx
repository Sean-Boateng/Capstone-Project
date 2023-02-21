import axios from "axios";
import React, { useState, useEffect } from 'react';

import AddMembers from "./AddMembers";
import DeleteMember from "./DeleteMember";
import MembersTable from "./MembersTable";
import UpdateMember from "./UpdateMember";
const Members = (props) => {
    const [members, setMembers]=useState([]);
    const [id, setId]=useState([]);
    const [memberToUpdate, setMemberToUpdate]=useState({})
    const [showUpdate,setShowUpdate] =useState(false)
    const [number,setNumber] = useState('')
    
  

    useEffect(()=>{
        getAllMembers();
             
    }, [])
    

    function toggleAndUpdate(updatePerson){
        setMemberToUpdate(updatePerson)
        setShowUpdate(true)
    }
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
        memberCount()
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

    async function updateMember(){
        
        let newEntry = {
            first_name: memberToUpdate.firstName,
            last_name:  memberToUpdate.lastName,
            date_of_birth:  memberToUpdate.DOB,
            address:  memberToUpdate.address,
            email: memberToUpdate.email
        };
        let response = await axios.put(`http://127.0.0.1:8000/api/members/${memberToUpdate.id}/`, newEntry)
        getAllMembers()
    }



    async function deleteMember(id){
        let response = await axios.delete(`http://127.0.0.1:8000/api/members/${id}/`);
        if (response.status === 204){
            return('Delete Successful')
        } }


    async function memberCount(){
            let response = members.length;
            setNumber(response)
            console.log(response)

    }



    return ( 
        <div>
            <MembersTable listOfMembers = {members} setMemberToUpdate={toggleAndUpdate} />
            <AddMembers  addmember = {addNewMember}/>
            < DeleteMember removemember = {deleteMember}/>
            {showUpdate ?  <UpdateMember updateInfo={updateMember} setMemberToUpdate={setMemberToUpdate} memberToUpdate={memberToUpdate}/>
            : null}
            <div style={{paddingTop:"20px"}}>
                <button onClick={memberCount}>count</button>
                You have a member total of {number}
            </div>
        </div>
     );
}
 
export default Members;
