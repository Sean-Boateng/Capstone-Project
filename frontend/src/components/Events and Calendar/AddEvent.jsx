import React, { useState } from 'react';


const AddEvent = (props) => {

    const[name,setName]=useState('')
    const[date,setDate]=useState('')
    const[address,setAddress]=useState('')
    


    function addEvent(info){
        info.preventDefault();
        let newEntry = {
            name: name,
            date_of_event: date,   
            address:address
        };
        console.log(newEntry)
        props.addevent(newEntry)
    }
    return ( 
        <form onSubmit ={addEvent}>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Name</label>
            <input  style={{color: 'black'}} type='string' value ={name} onChange={(info)=>setName(info.target.value)}/><br/>

            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Date</label>
            <input style={{color: 'black'}} type= 'date' value ={date} onChange={(info)=>setDate(info.target.value)}/><br/>

            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Address</label>
            <input style={{color: 'black'}} type= 'string' value ={address} onChange={(info)=>setAddress(info.target.value)}/><br/>
              
            <button type='submit' >Add</button>
        </form >
     );
}
 
export default AddEvent;