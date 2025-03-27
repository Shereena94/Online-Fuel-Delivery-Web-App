import React, { useState } from 'react'
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const CarBattery = () => {
   const [formData, setFormData] = useState({
        name: '',
        contact: '',
        fuelType: 'Petrol',
        quantity: '',
        address: '',
        paymentMethod: 'Cash on Delivery',
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        setSubmitted(true);
      };
  return (
  <>
   <Container className="fuel-purchase-container mt-5">
        <Card className="fuel-purchase-card">
          <Card.Body>
            <h4 className="text-center text-primary">Inqat Battery Delivery</h4>
            <p className="text-center text-muted">Order Battery to your doorstep in just a few clicks!</p>
            {submitted && <Alert variant="success">Order placed successfully!</Alert>}
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formContact">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Enter contact number"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
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
                </Col>

                <Col>
                  <Form.Group controlId="formFuelType">
                    <Form.Label>Battery Type</Form.Label>
                    <Form.Select name="BatteryType" value={formData.batteryType} onChange={handleChange} required>
                    <option value="">Select Battery Type</option>
            <option value="Lead Acid">Lead Acid</option>
            <option value="AGM">AGM</option>
            <option value="Lithium-Ion">Lithium-Ion</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formQuantity">
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
                </Col>
              </Row>

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
             
              <Form.Group className="mb-4" controlId="formPaymentMethod">
                <Form.Label>Payment Method</Form.Label>
                <Form.Select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                  <option value="Online Payment">Online Payment</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Place Order
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
  </>
  )
}

export default CarBattery