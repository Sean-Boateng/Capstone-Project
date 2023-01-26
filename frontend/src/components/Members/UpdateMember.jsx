import React, { useState } from 'react';


const UpdateMember = (props) => {


    function UpdateMember(info) {
        info.preventDefault();
        // let newEntry = {
        //     first_name: firstName,
        //     last_name: lastName,
        //     date_of_birth: DOB,
        //     address: address,
        //     email: email
        // };

        props.updateInfo()

    }




    return (
        <div>
            <div>Update Member Info</div>

           
            <form onSubmit={UpdateMember}>


                <label style={{ paddingBottom: '1rem', paddingRight: '1em' }}>firstName</label>
                <input style={{ color: 'black' }} type='string' value={props.memberToUpdate.firstName}
                    onChange={(info) => props.setMemberToUpdate({ ...props.memberToUpdate, firstName: info.target.value })} /><br />

                <label style={{ paddingBottom: '1rem', paddingRight: '1em' }}> lastName</label>
                <input style={{ color: 'black' }} type='string' value={props.memberToUpdate.lastName} 
                    onChange={(info) =>props. setMemberToUpdate({...props.memberToUpdate, lastName: info.target.value})} /><br />

                <label style={{ paddingBottom: '1rem', paddingRight: '1em' }}>DOB</label>
                <input style={{ color: 'black' }} type='date' value={props.memberToUpdate.DOB} 
                    onChange={(info) =>props. setMemberToUpdate({...props.memberToUpdate, DOB:info.target.value})} /><br />

                <label style={{ paddingBottom: '1rem', paddingRight: '1em' }}>address</label>
                <input style={{ color: 'black' }} type='string' value={props.memberToUpdate.address} 
                    onChange={(info) =>props. setMemberToUpdate({...props.memberToUpdate,adress:info.target.value})} /><br />

                <label style={{ paddingBottom: '1rem', paddingRight: '1em' }}>email</label>
                <input style={{ color: 'black' }} type='string' value={props.memberToUpdate.email} 
                    onChange={(info) => props.setMemberToUpdate({...props.memberToUpdate, email:info.target.value})} /><br />
                <button type='submit' >Update</button>
            </form >
        </div>
    );
}

export default UpdateMember;