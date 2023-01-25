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
import YoutubePlayer from "./components/Youtube/YoutubePlayer";
import { ContactUs } from "./components/Email/email";




function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage/>
            </PrivateRoute>           
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/news" element={<Announcements />} />
        <Route path="/home" element={<HomePage2 />} />
        <Route path="/members" element={<Members />} />
        <Route path="/video" element={<YoutubePlayer />} />
        <Route path="/email" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
