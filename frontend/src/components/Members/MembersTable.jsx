const MembersTable = (props) => {
    return ( 
        <table class="table">
        <thead> 
          <tr>
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
                  <td>{el.firstName}</td>
                  <td>{el.lastName}</td>
                  <td>{el.DOB}</td>
                  <td>{el.address}</td>
                  <td>{el.email}</td>
                </tr>
              );
          }
          )}           
        </tbody>
      </table>
     );
}
 
export default MembersTable;