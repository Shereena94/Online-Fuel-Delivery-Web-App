import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const CarTyres = () => {

  
    const [formData, setFormData] = useState({
      carModel: "",
      tyreType: "",
      tyreSize: "",
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
      alert("Your tyre order has been placed!");
    };
  return (
<>
<Container className="mt-5">
      <h2 className="text-center mb-4">Car Tyre Purchase</h2>
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
          <Form.Label>Tyre Type</Form.Label>
          <Form.Select name="tyreType" value={formData.tyreType} onChange={handleChange} required>
            <option value="">Select Tyre Type</option>
            <option value="All-Season">All-Season</option>
            <option value="Winter">Winter</option>
            <option value="Summer">Summer</option>
            <option value="Performance">Performance</option>
            <option value="Off-Road">Off-Road</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tyre Size</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tyre size (e.g., 205/55R16)"
            name="tyreSize"
            value={formData.tyreSize}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
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

export default CarTyres