import React, { useState } from 'react';

const DeleteEvent = (props) => {

    const[id,setID]=useState('');
    
    


    function deleteEvent(info){
        info.preventDefault();
       
        console.log(id)
        props.removeevent(id)
    }
    return ( 
        <div>
            <div>PLEASE REFRESH PAGE TO SEE NEW RESULTS</div>
            <form onSubmit ={deleteEvent}>
                <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>ID Number</label>
                <input  style={{color: 'black'}} type='number' value ={id} onChange={(info)=>setID(info.target.value )}/><br/>

                
                
                <button type='submit'>Delete</button>
            </form >
        </div>
     );
}
export default DeleteEvent;