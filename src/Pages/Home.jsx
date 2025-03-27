import React, { useState } from "react";
import bodyimage from "../assets/Images/bodyimg.webp";
import { Link } from "react-router-dom";
import ServicesCard from "../Components/ServicesCard";
import coverVideo from "../assets/Images/traffic.mp4";
import { Button, Modal } from "react-bootstrap";


const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center py-3 rounded shadow"
        
      >
        <div className="container">
          <div className="d-flex justify-content-evenly align-items-center mt-5 mb-5 sticky-top ">
            <Link
              to="/fueldelivery"
              className="btn"
              style={{ backgroundColor: "cyan", color: "black" }}
            >
              <i class="fa-solid fa-truck-field me-2"></i>Order Fuel
            </Link>
            <Link
              to="/carbattery"
              className="btn"
              style={{ backgroundColor: "cyan", color: "black" }}
            >
              <i class="fa-solid fa-car-battery me-2"></i> Battery
            </Link>
            <Link
              to="/carengineoil"
              className="btn"
              style={{ backgroundColor: "cyan", color: "black" }}
            >
              <i class="fa-solid fa-oil-can me-2"></i>Engine Oil
            </Link>

            <Link
              to="/cartyres"
              className="btn"
              style={{ backgroundColor: "cyan", color: "black" }}
            >
              <img
                src="https://cdn0.iconfinder.com/data/icons/car-parts-14/32/Car_automobile_wheel_tyre_tire-1024.png"
                style={{ width: "20px", height: "20px" }}
              />{" "}
              Tyre
            </Link>

            <Link
              to="/rescueme"
              className="btn"
              style={{ backgroundColor: "cyan", color: "black" }}
            >
              <img
                src="https://cdn0.iconfinder.com/data/icons/construction-and-maintenance-2/50/Wrecker-19-512.png"
                className="me-2"
                style={{ width: "20px", height: "20px" }}
              />
              Recovery
            </Link>
          </div>

          {/* <div>
          <video className='w-100 border' autoPlay muted loop src={coverVideo}>
            <h1 className='overlay'>On-site Fuel Delivery Services <br /><span>24/7</span></h1>
          </video>
        </div> */}

          <div
            style={{
              position: "relative",
              width: "100%",

              margin: "auto",
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <video
              className="w-100 border"
              autoPlay
              muted
              loop
              src={coverVideo}
            >
              {" "}
            </video>
            <div
              style={{
                position: "absolute",
                top: "35%",
                left: "12%",
                // transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: "center",
                background: "rgba(0, 0, 0, 0.5)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
            <h1 style={{fontFamily: "Arial"}}>On-site Fuel Delivery Services <br /><span className="text-warning" style={{fontFamily: "Arial"}}>@</span> Your Doorstep <br /><span className="text-warning" style={{fontFamily: "Arial"}}>24/7</span></h1>
            <h3 style={{fontFamily: "Arial"}}>Fast & Reliable</h3>
            </div>
          </div>

          <div className="row align-items-center mt-5">
            <div className="col-lg-6 ">
              <img
                className="img-fluid border rounded shadow "
                src={bodyimage}
                alt=""
                style={{ height: "500px", width: "800px" }}
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5" style={{ color: "#2af0fb" }}>
              <p
                style={{
                  color: "orange",
                  fontSize: "30px",
                  marginBottom: "95px",
                }}
              >
                <sup className="me-3">
                  <i class="fa-solid fa-quote-left text-warning"></i>
                </sup>
                Revolutionising Fuel Delivery with every click
                <sup className="ms-3">
                  <i class="fa-solid fa-quote-right text-warning"></i>
                </sup>
              </p>
              <h2 style={{ color: "cyan" }}>
                Fuel delivered to your Doorstep, Anytime, Anywhere !!
              </h2>
              <Button variant="primary" onClick={handleShow}>
                Order Now
              </Button>

              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome..!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please update your profile to proceed further</Modal.Body>
        <Modal.Footer>
          
          <Link to='/userprofile'><Button variant="primary" onClick={handleClose}>
            Update Profile
          </Button></Link>
        </Modal.Footer>
      </Modal>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center mt-5 ">Our Offerings</h2>
      </div>

      <marquee>
        <div className="d-flex justify-content-evenly mt-5">
          <ServicesCard />
        </div>
      </marquee>
    </>
  );
};

export default Home;
