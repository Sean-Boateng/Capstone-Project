import React, { useState } from 'react';

const DeleteAnnouncement = (props) => {

    const[id,setID]=useState('');
    
    


    function deleteAnnouncement(info){
        // info.preventDefault();
       
        console.log(id)
        props.removeannouncement(id)
    }
    return ( 
        <div>
            <div style={{textAlign:"center", fontSize:"15px", marginBottom:"10px"}}>To delete announcement, enter it's id number below</div>
            <form onSubmit ={deleteAnnouncement} style={{ display:'flex', justifyContent:'center'}}>
                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>ID Number</label>
                <input  style={{color: 'black'}} type='number' value ={id} onChange={(info)=>setID(info.target.value )}/><br/>

                
                
                <button style={{marginLeft:"5px"}} type='submit'>Delete</button>
            </form >
        </div>
     );
}
export default DeleteAnnouncement;