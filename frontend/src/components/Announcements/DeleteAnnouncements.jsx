import React, { useState } from 'react';

const DeleteAnnouncement = (props) => {

    const[id,setID]=useState('');
    
    


    function deleteAnnouncement(info){
        info.preventDefault();
       
        console.log(id)
        props.removeannouncement(id)
    }
    return ( 
        <div>
            <div>PLEASE REFRESH PAGE TO SEE NEW RESULTS</div>
            <form onSubmit ={deleteAnnouncement}>
                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>ID Number</label>
                <input  style={{color: 'black'}} type='number' value ={id} onChange={(info)=>setID(info.target.value )}/><br/>

                
                
                <button type='submit'>Delete</button>
            </form >
        </div>
     );
}
export default DeleteAnnouncement;