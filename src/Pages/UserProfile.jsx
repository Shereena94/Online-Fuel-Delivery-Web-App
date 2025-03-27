import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const UserProfile = () => {
  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center">Profile Details</h2>
        <p className="text-center">Enter your profile information</p>
        <div className="d-flex justify-content-center mb-3">
          <label>
            {/* <div className="rounded-circle bg-dark" style={{ width: 80, height: 80 }}></div> */}

            <input type="file" name="" id="" style={{ display: "none" }} />
            <img
              className="img-fluid rounded-circle"
              src="https://static.vecteezy.com/system/resources/previews/024/153/096/original/upload-photo-icon-editable-vector.jpg"
              alt=""
              height={"200px"}
              width={"200px"}
            />
          </label>
        </div>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" />
                {/* {errors.firstName && <p className="text-danger">{errors.firstName}</p>} */}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" />
                {/* {errors.lastName && <p className="text-danger">{errors.lastName}</p>} */}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>PAN</Form.Label>
                <Form.Control type="text" name="pan" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Customer reuirement</Form.Label>
                <Form.Select name="customerSegment">
                  <option value="">Select</option>
                  <option value="Premium">Personal Use</option>
                  <option value="Standard">Commercial purpose</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phone" />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex gap-3">
            <Button type="submit" variant="success">
              Update Profile
            </Button>
            <Button variant="outline-danger">Cancel</Button>
          </div>
          <div className="mt-3">
            <Button variant="link" className="text-danger">
              Delete Account
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default UserProfile;
