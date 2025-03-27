import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const RescueMe = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    carModel: "",
    rescueType: "",
    location: "",
    description: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rescue Request Submitted:", formData);
    alert("Your rescue request has been sent!");
  };

  return (
    <>
    <Container className="mt-5">
      <h2 className="text-center mb-4">Vehicle Rescue Request</h2>
      <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow-lg">
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Type</Form.Label>
              <Form.Select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
                <option value="">Select Vehicle Type</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                <option value="Truck">Truck</option>
                <option value="Bus">Bus</option>
                <option value="Van">Van</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Model</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your vehicle model"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Rescue Type</Form.Label>
          <Form.Select name="rescueType" value={formData.rescueType} onChange={handleChange} required>
            <option value="">Select Rescue Type</option>
            <option value="Towing Service">Towing Service</option>
            <option value="Battery Jump Start">Battery Jump Start</option>
            <option value="Flat Tyre Assistance">Flat Tyre Assistance</option>
            <option value="Fuel Delivery">Fuel Delivery</option>
            <option value="Lockout Assistance">Lockout Assistance</option>
          </Form.Select>
        </Form.Group>

       <div className="d-flex">

       <Form.Group className="mb-3">
          <Form.Label style={{width:"600px"}}>Current Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your location or Google Maps link"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group> <Link className='text-danger ms-5'><i className="fa-solid fa-location-dot text-danger fs-1 m-5" ></i>Browse your location</Link></Form.Group>


       </div>

    

        <Form.Group className="mb-3">
          <Form.Label>Additional Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe your issue (optional)"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="danger" type="submit" className="w-100">
          Request Rescue
        </Button>
      </Form>
    </Container>
    </>
  )
}

export default RescueMe