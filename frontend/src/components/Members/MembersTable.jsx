import { useState } from "preact/hooks";

const MembersTable = (props) => {

 

    return ( 
        <table class="table" style={{marginBottom: "100px"}}>
        <thead> 
          <tr>
            <th> ID</th>
            <th> FirstName</th>
            <th>LastName</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {props.listOfMembers.map((el) => {
              return(
                <tr >
                  <td>{el.id}</td>
                  <td>{el.firstName}</td>
                  <td>{el.lastName}</td>
                  <td>{el.DOB}</td>
                  <td>{el.address}</td>
                  <td>{el.email}</td>
                  <button onClick={()=>props.setMemberToUpdate(el)}>Edit</button>
                </tr>
              );
          }
          )}           
        </tbody>
      </table>
     );
}
 
export default MembersTable;