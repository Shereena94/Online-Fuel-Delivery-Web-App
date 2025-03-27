import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ContactUs = () => {
  return (
    <>
      <div style={{ position: "relative", backgroundAttachment: "fixed" }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.180731918023!2d77.64064634066611!3d12.9019105996282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15345afc6379%3A0x2c6216f16f13523f!2sEBC%20Space%204!5e0!3m2!1sen!2sin!4v1742703070759!5m2!1sen!2sin" width="100%" height="550" style={{border:"0"}} allowFullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "25%",
          background: "rgba(228, 138, 138, 0.9)",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "300px",
          zIndex: 1000,
        }}
      >
        <h1 style={{color:"red",fontSize:"25px"}}>Our Locations</h1>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Banglore</Accordion.Header>
        <Accordion.Body>
        <p>Phone: 8952639878</p>
        <p>Email: order@inqatfuel.in</p>
        <p>27th CROSS, Hosapalya Main Rd, ITI Layout, Sector 7, HSR Layout, Bengaluru, Karnataka 560102</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Calicut</Accordion.Header>
        <Accordion.Body>

        <p>Phone: 8952639879</p>
        <p>Email: order@inqatfuel.in</p>
        <p>3rd floor,S.S Tower, IIT main road, Kunnamangalam, Calicut</p>
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>

      <div className="container" >

        <h3 className="text-center text-success mt-5 mb-5" style={{fontFamily:"Arial"}}>Get In Touch with us!</h3>
        <p style={{fontFamily:"Arial",width:"500px",marginLeft:"410px"}}>Thank you for your interest in INQAT's services. Please provide the following information about your business needs to help us serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within 48 hours.</p>

        <div className="mt-5 " style={{width:"250px", marginLeft:"500px"}}> 
           <FloatingLabel
       
        label="Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name" />
      </FloatingLabel>


      <FloatingLabel label="email" className="mb-3">
        <Form.Control type="email" placeholder="email" />
      </FloatingLabel>

      <FloatingLabel label="Phone" className="mb-3">
        <Form.Control type="text" placeholder="Phone" />
      </FloatingLabel>
      

      <FloatingLabel label="Additional Details" className="mb-3">
      <Form.Control as="textarea" rows={3} placeholder="Additional Details"/>
      </FloatingLabel>

      <Button variant="success">Submit Request</Button>
      </div>

      

      </div>
    </>
  );
};

export default ContactUs;
