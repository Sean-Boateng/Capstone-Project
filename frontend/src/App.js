// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import Announcements from "./components/Announcements/Announcements";
import HomePage2 from "./UserPOV/HomePage2";
import Members from "./components/Members/Members";

import { ContactUs } from "./components/Email/ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserAnnouncementDetails from "./UserPOV/UserAnnoouncements/UserAnnouncementDetails";
import LatestVideo from "./components/Youtube/LastestVideo";
import WelcomeVideo from "./components/Youtube/WelcomeVideo";
import About from "./UserPOV/About/About";

import Connect from "./UserPOV/Connect/Connect";
import Calendar from "./components/Events and Calendar/Calendar";
import FullCalendar from "@fullcalendar/react";
import DisplayCalendar from "./components/Events and Calendar/DisplayCalendar";
import Give from "./UserPOV/Give/Give";
import EventFlyers from "./UserPOV/EventFlyers/EventFlyers";
import NewVideos from "./components/Youtube/Videos/AllVideos";







function App() {
  return (
    <div>
      
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Navbar/>
              <HomePage/>
              
            </PrivateRoute>           
          }
        />
      
        <Route
          path="/members"
          element={
            <PrivateRoute>
              <Members/>
            </PrivateRoute>           
          }
        />
        <Route
          path="/addnews"
          element={
            <PrivateRoute>
              <Announcements />
            </PrivateRoute>           
          }
        />
        <Route
          path="/addvideo"
          element={
            <PrivateRoute>
              <NewVideos />
            </PrivateRoute>           
          }
        />
      



        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={''} />
        <Route path="/home" element={<HomePage2 />}/>
        <Route path="/latest" element={<LatestVideo />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/news" element={<UserAnnouncementDetails/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/ef" element={<EventFlyers/>} />
        <Route path="/connect" element={<Connect/>} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/calendardisplay" element={<DisplayCalendar/>} />
        <Route path="/give" element={<Give/>} />
       
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
