const UserAnnounceTable = (props) => {
    return ( 
        <table>
        <thead>
          
        </thead>

        <tbody>
          {props.news.map((news) => {
              return(
                <tr >
                  <td>{news.announcements}</td>
                  <td>{news.details}</td>
                  
                </tr>
              );
          }
          )}           
        </tbody>
      </table>
     );
}
 
export default UserAnnounceTable;