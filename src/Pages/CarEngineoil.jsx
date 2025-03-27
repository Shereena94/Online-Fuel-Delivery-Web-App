import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const CarEngineoil = () => {
  const [formData, setFormData] = useState({
    carModel: "",
    oilType: "",
    viscosity: "",
    quantity: 1,
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your engine oil order has been placed!");
  };
  return (
    <>
     <Container className="mt-5">
      <h2 className="text-center mb-4">Car Engine Oil Purchase</h2>
      <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <Form.Group className="mb-3">
          <Form.Label>Car Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your car model"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Oil Type</Form.Label>
          <Form.Select name="oilType" value={formData.oilType} onChange={handleChange} required>
            <option value="">Select Oil Type</option>
            <option value="Synthetic">Synthetic</option>
            <option value="Semi-Synthetic">Semi-Synthetic</option>
            <option value="Mineral">Mineral</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Viscosity Grade</Form.Label>
          <Form.Select name="viscosity" value={formData.viscosity} onChange={handleChange} required>
            <option value="">Select Viscosity</option>
            <option value="0W-20">0W-20</option>
            <option value="5W-30">5W-30</option>
            <option value="10W-40">10W-40</option>
            <option value="15W-50">15W-50</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quantity (Liters)</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </Form.Group>

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

       
        <div className="d-flex">
              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Delivery Address</Form.Label>
                {/* <i class="fa-solid fa-location-dot"></i> */}
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter delivery address"
                  required
                  style={{width:"550px"}}
                />
              </Form.Group>
              <Form.Group> <Link className='text-danger ms-5'><i className="fa-solid fa-location-dot text-danger fs-1 m-5" ></i>Browse your location</Link></Form.Group>
              </div>

        <Button variant="primary" type="submit" className="w-100">
          Place Order
        </Button>
      </Form>
    </Container>
    </>
  )
}

export default CarEngineoil