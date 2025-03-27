import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Images/fueltruck.png";
import { Button } from "react-bootstrap";



const Header = () => {
  const navigate = useNavigate();

  const onSignup = ()=>{
    navigate('/userlogin')
  }
  return (
    <Navbar expand="lg" className="bg-secondary sticky-top shadow">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <Navbar.Brand className="d-flex" >
            {" "}
            <img src={logo} alt="brand logo" className="w-25" />{" "}
            <h2 className="text-warning mt-5">
              INQAT{" "}
              <sub>
                <p style={{ fontSize: "15px" }}>Doorstep Fuel delivery</p>
              </sub>
            </h2>{" "}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="fueldelivery">
                Fuel Delivery
              </NavDropdown.Item>
              <NavDropdown.Item href="cartyres">Car Tyres</NavDropdown.Item>
              <NavDropdown.Item href="carengineoil">
                Car Engine Oil
              </NavDropdown.Item>
              <NavDropdown.Item href="carbattery">Car Battery</NavDropdown.Item>
              <NavDropdown.Item href="rescueme">Rescue me</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="ourteam">
               Our Team
              </NavDropdown.Item>
              <NavDropdown.Item href="community">Community</NavDropdown.Item>
              <NavDropdown.Item href="aboutus">
               About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="contactus">Contact Us</NavDropdown.Item>
            </NavDropdown>

            {/* <Link className="btn btn-warning ms-3">SignUp</Link> */}
            <Button onClick={onSignup} >SignUp</Button>
            <Link className="btn btn-warning ms-4">Order Fuel</Link>




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
