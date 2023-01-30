const UserAnnounceTable = (props) => {
    return ( 
        <table>
        <thead>
          
        </thead>

        <tbody>
          {props.news.map((news) => {
              return(
                <tr >
                  <td style={{paddingBottom:' 20px'}}>
                    {news.announcements}
                    </td> 
                </tr>
              );
          }
          )}           
        </tbody>
      </table>
     );
}
 
export default UserAnnounceTable;