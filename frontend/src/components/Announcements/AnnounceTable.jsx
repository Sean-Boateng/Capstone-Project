const AnnounceTable = (props) => {
    return ( 
        <table class="table table-dark">
        <thead style={{color:"black", }}>
          <div style={{textAlign:"center"}}>Announcements List</div>
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