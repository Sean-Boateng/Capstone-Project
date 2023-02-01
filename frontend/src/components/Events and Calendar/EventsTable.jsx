const EventsTable = (props) => {
    return ( 
        <table class="table">
        <thead>
          Events List
        </thead>

        <tbody>
          {props.data.map((data) => {
              return(
                <tr>
                  <td>{data.id}</td>
                  <td>{data.title}</td> 
                </tr>
              );
          }
          )}           
        </tbody>
      </table>
     );
}
 
export default EventsTable;