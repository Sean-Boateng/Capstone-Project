import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import Calendar from "../../components/Events and Calendar/Calendar";
import Announcements from "../../components/Announcements/Announcements";
import Members from "../../components/Members/Members";
import './HomePage.css'
import AddVideoForm from "../../components/Youtube/Videos/AddVideoForm";
import NewVideos from "../../components/Youtube/Videos/AllVideos";




const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}

      
      <div className="row">
          <div className="col homesection">
            <a href="/addnews">
              Edit Announcements
            </a>
          </div>
          
          <div className="col homesection">
            <a href="/members">
              Member List
            </a>
          </div>
      </div>
      
      <NewVideos/>
    </div>
  );
};

export default HomePage;
{/* <Calendar/>
      <Announcements/> */}