import UserAnnounceTable from "./UserAnnoouncements/UserAnnouceTable";
import "./CSS Files/homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import UserAnnouncements from "./UserAnnoouncements/UserAnnouncements";
import UserCalendar from "./UserCalendar";

import Navbar2 from "./NavBar/navbar2";
import Body1 from "./body/Body1";

const HomePage2 = () => {
   

    return ( 
        <div class="container">
            <Navbar2/>
            <Body1/>
            
            {/* <UserCalendar/> */}
            

        </div>
     );
}
 
export default HomePage2;