import React, { useState } from 'react';

const DeleteMember = (props) => {

    const[id,setID]=useState('');
    
    


    function deleteMember(info){
        info.preventDefault();
       
        console.log(id)
        props.removemember(id)
    }
    return ( 
        <div style={{marginTop:"20px"}}>
            <h1>Delete Member</h1>
            <div>PLEASE REFRESH PAGE TO SEE NEW RESULTS</div>
            <form onSubmit ={deleteMember}>
                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>ID Number</label>
                <input  style={{color: 'black'}} type='number' value ={id} onChange={(info)=>setID(info.target.value )}/><br/>

                
                
                <button type='submit'>Delete</button>
            </form >
        </div>
     );
}
export default DeleteMember;