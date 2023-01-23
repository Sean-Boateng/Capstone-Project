import React, { useState } from 'react';

const AddMembers = (props) => {

    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[DOB,setDOB]=useState('');
    const[address,setAddress]=useState('');
    const[email,setEmail]=useState('');
    
    


    function addNewMember(info){
        info.preventDefault();
        let newEntry = {
            firstName : firstName,
            lastName : lastName,
            DOB : DOB,
            address : address,
            email : email,
            
        };
        console.log(newEntry)
        props.addmember(newEntry)
    }
    return ( 
        <div>
            <div>AFTER ADDING NEW MEMBER, PLEASE REFRESH PAGE TO SEE NEW RESULTS</div>
            <form onSubmit ={addNewMember}>
                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>FirstName</label>
                <input  style={{color: 'black'}} type='string' value ={firstName} onChange={(info)=>setFirstName(info.target.value  )}/><br/>

                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}> LastName</label>
                <input style={{color: 'black'}} type= 'string' value ={lastName} onChange={(info)=>setLastName(info.target.value)}/><br/>

                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}> DOB</label>
                <input style={{color: 'black'}} type= 'string' value ={DOB} onChange={(info)=>setDOB(info.target.value)}/><br/>

                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}> Address</label>
                <input style={{color: 'black'}} type= 'string' value ={address} onChange={(info)=>setAddress(info.target.value)}/><br/>

                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}> Email</label>
                <input style={{color: 'black'}} type= 'string' value ={email} onChange={(info)=>setEmail(info.target.value)}/><br/>

                
                <button type='submit' >Add</button>
            </form >
        </div>
     );
}
export default AddMembers;