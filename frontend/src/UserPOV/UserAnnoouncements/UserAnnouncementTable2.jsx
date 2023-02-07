import './UserAnnouncements.css'

const UserAnnouncementTable2 = (props) => {
    return ( 
      <div className='page pagepic'>
        <div className="title" >Announcements</div>
            <table  class=" container table table-hover">
              
            <thead>
              <th>Announcements</th>
              <th style={{paddingLeft:"20px", }}>Details</th>
            </thead>
          

            <tbody>
              {props.news.map((news) => {
                  return(
                    <tr className='news' style={{}} >
                      <td style={{paddingBottom: "20px", paddingTop:"20px",borderRight:"1px black solid"}}>{news.announcements}</td>
                      <td style={{paddingBottom: "20px", paddingTop:"20px", paddingLeft:"20px"}}>{news.details}</td> 
                    </tr>
                  );
              }
              )}           
            </tbody>
          </table>
      </div>
     );
}
 
export default UserAnnouncementTable2;