import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Auth from "./Pages/Auth";
import OurTeam from "./Pages/OurTeam";
import Community from "./Pages/Community";
import CarBattery from "./Pages/CarBattery";
import CarEngineoil from "./Pages/CarEngineoil";
import CarTyres from "./Pages/CarTyres";
import FuelDelivery from "./Pages/FuelDelivery";
import OrderTracking from "./Pages/OrderTracking";
import RescueMe from "./Pages/RescueMe";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UserProfile from "./Pages/UserProfile";
import AdminDashboard from "./Pages/AdminDashboard"




function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/usersignup" element={<Auth />} />
        <Route path="/userlogin" element={<Auth />} />
        {/* <Route path="/adminlogin" element={<Auth />} /> */}
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/community" element={<Community />} />
        <Route path="/carbattery" element={<CarBattery />} />
        <Route path="/carengineoil" element={<CarEngineoil />} />
        <Route path="/cartyres" element={<CarTyres />} />
        <Route path="/fueldelivery" element={<FuelDelivery />} />
        <Route path="/orders" element={<OrderTracking />} />
        <Route path="/rescueme" element={<RescueMe />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />

        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
