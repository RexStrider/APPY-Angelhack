import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
class Signup extends Component {
  state = {
    Name: '',
    City: '',
    Email: '',
    Password: '',
    Hometown: '',
    Basketball: '',
    Music: '',
    Hackathon: ''


  }

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });


  };

  clickHandler = () => {
    console.log("click handdled");
  }

  render() {
    console.log(this.state);
    return (
      <Container className="Signup">
        <Form>

          <Form.Group as={Col}>
            <Form.Label >Name</Form.Label>
            <Form.Control id="Name" value={this.state.Name} onChange={this.handleInputChange} placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control id="City" value={this.state.City} onChange={this.handleInputChange} placeholder="Enter City" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control id="Email" value={this.state.Email} type="email" onChange={this.handleInputChange} placeholder="Enter email" />
          </Form.Group>


          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control id="Password" type="password" value={this.state.Password} onChange={this.handleInputChange} placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Hometown</Form.Label>
            <Form.Control id="Hometown" value={this.state.Hometown} onChange={this.handleInputChange} placeholder="Enter Hometown" />
          </Form.Group>


          <Form.Group as={Col}>
            <Form.Label>How do you feel about Basketball?</Form.Label>
            <Form.Control type='text' id="Basketball" value={this.state.Basketball} onChange={this.handleInputChange}/>
          </Form.Group>

          <Form.Group as={Col}>

            <Form.Label>Tell us about your favorite type of music.</Form.Label>
            <Form.Control type='text' id="Music" value={this.state.Music} onChange={this.handleInputChange}/>
          </Form.Group>

          <Form.Group as={Col}>

            <Form.Label> What are your thoughts on Hackathons? </Form.Label>
            <Form.Control type='text' id="Hackathon" value={this.state.Hackathon} onChange={this.handleInputChange}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.clickHandler}>
            Submit
  </Button>

        </Form>

      </Container>
    );
  }
}



export default Signup;
