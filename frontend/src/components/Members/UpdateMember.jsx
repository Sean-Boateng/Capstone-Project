import React, { useState } from 'react';


const UpdateMember = (props) => {

    const[id,setID]=useState('')
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[DOB,setDOB]=useState('')
    const[address,setAddress]=useState('')
    const[email,setEmail]=useState('')


    function UpdateMember(info){
        info.preventDefault();
        let newEntry = {
            first_name: firstName,
            last_name: firstName,
            date_of_birth: DOB,
            address:address,
            email:email
        };
        
        props.updateInfo(newEntry)
        
    }

    function memberId(number){
        number.preventDefault();
        props.thisid(id)
    }



    return ( 
        <div>
<div>Update Member Info</div>
            <form onSubmit={memberId}>
                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>id</label>
                <input  style={{color: 'black'}} type='number' value ={id} onChange={(number)=>setID(number.target.value  )}/><br/>
            </form>

            <form onSubmit ={UpdateMember}>
                

                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>firstName</label>
                <input  style={{color: 'black'}} type='string' value ={firstName} onChange={(info)=>setFirstName(info.target.value  )}/><br/>

                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}> lastName</label>
                <input style={{color: 'black'}} type= 'string' value ={lastName} onChange={(info)=>setLastName(info.target.value)}/><br/>

                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>DOB</label>
                <input style={{color: 'black'}} type= 'date' value ={DOB} onChange={(info)=>setDOB(info.target.value)}/><br/>
                
                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>address</label>
                <input style={{color: 'black'}} type='string' value = {address} onChange = {(info)=> setAddress(info.target.value)}/><br/>

                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>email</label>
                <input style={{color: 'black'}} type= 'string' value ={email} onChange={(info)=>setEmail(info.target.value)}/><br/>    
                <button type='submit' >Add</button>
            </form >
        </div>
     );
}
 
export default UpdateMember;