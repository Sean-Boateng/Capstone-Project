const AnnounceTable = (props) => {
    return ( 
        <table class="table table-dark">
        <thead style={{color:"black"}}>
          Announcements List
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