import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { signup } from '../auth';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';



class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      about: "",
      gender: "",
      location: "",
      choice1: "",
      choice2: "",
      choice3: "",
      error: "",
      open: false,
    }
  }

  handleChange = name => event => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  radioChange1 = event => {
    if (event.target.selected) {
      this.setState({
        choice1: event.target.value
      })
    }
  }

  clickHandler = event => {
    event.preventDefault();
    const { 
      name, 
      email, 
      password, 
      gender,
      about,
      location,
      choice1,
      choice2,
      choice3
    } = this.state;

    // Create new user
    const user = {
      name, 
      email, 
      password, 
      gender,
      about,
      location,
      choice1,
      choice2,
      choice3
    }

    // signing up user
    signup(user).then(data => {
      if(data.error) {
        this.setState({
          error: data.error
        });
      } else {
        this.state({
          name: "",
          email: "",
          password: "",
          about: "",
          gender: "",
          location: "",
          choice1: "",
          choice2: "",
          choice3: "",
          error: "",
          open: true
        });
      };
    });
  };



  render() {
    const { name, email, password, error, open, location, choice1, choice2, choice3, about } = this.state;


    return (
      <Container className="Signup">  
        <h2>Sign Up</h2>
        {/* Failure Message */}
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
        {/* Successful Message */}
          <div
              className="alert alert-info"
              style={{ display: open ? "" : "none" }}
            >
              New account is successfully created. Please{" "}
              <Link to="/">Sign In</Link>.
           </div>
        <Form>
          <Form.Group as={Col}>
            <Form.Label >Name</Form.Label>
            <Form.Control 
              id="Name" 
              value={name} 
              onChange={this.handleInputChange} 
              placeholder="Enter Name" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control id="City" value={this.state.City} onChange={this.handleInputChange} placeholder="Enter City" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              id="Email" 
              value={email} 
              type="email" 
              onChange={this.handleInputChange}
              placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              id="Password" 
              type="password" 
              value={password} 
              onChange={this.handleInputChange} 
              placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Location</Form.Label>
            <Form.Control 
              id="Location" 
              value={location} 
              onChange={this.handleInputChange} 
              placeholder="Enter Your Location" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>How do you feel about Basketball?</Form.Label>
              <div className="choice-group">
                <p>
                <input 
                  type="radio" 
                  name="basket-choice-1" 
                  value="1" /> My eyes are glued to the game on TV
                </p>
                <p>
                <input 
                  type="radio" 
                  name="basket-choice-1" 
                  value="2" /> My eyes are glued to the game on TV
                </p>
                <p>
                <input 
                  type="radio" 
                  name="basket-choice-1" 
                  value="3" /> My eyes are glued to the game on TV
                </p>
                <p>
                <input 
                  type="radio" 
                  name="basket-choice-1" 
                  value="4" /> My eyes are glued to the game on TV
                </p>
              </div>
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
