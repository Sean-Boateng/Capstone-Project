const AnnounceTable = (props) => {
    return ( 
        <table>
        <thead>
          
        </thead>

        <tbody>
          {props.news.map((news) => {
              return(
                <tr>
                  <td>{news.id}</td>
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
 
export default AnnounceTable;