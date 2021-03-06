import React, { Component } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap'

import { signup } from '../auth';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      gender: '',
      about: '',
      location: '',
      choice1: '',
      choice2: '',
      choice3: '',
      error: '',
      open: false,
      online: false
    }
  }
  

  handleInputChange = event => {
    console.log(event.target);

    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  clickHandler = event => {
    event.preventDefault();
    
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      about: this.state.about,
      location: this.state.location,
      choice1: this.state.choice1,
      choice2: this.state.choice2,
      choice3: this.state.choice3,
      online: this.state.online
    }

    signup(user);

  }

  render() {
    console.log(this.state);
    return (
      <Container className="Signup auth-page">
        <Form>
          <h2>Sign Up</h2>
          <small style={{ letterSpacing: '.3rem'}}>*Hey, you are one step away from joining Appy community</small>
          <Form.Group as={Col}>
            <Form.Label >Name</Form.Label>
            <Form.Control name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="your name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Location</Form.Label>
            <Form.Control name="location" value={this.state.location} onChange={this.handleInputChange} placeholder="your location" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" value={this.state.email} type="email" onChange={this.handleInputChange} placeholder="your email" />
          </Form.Group>


          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="your password" />
          </Form.Group>

          <Form.Group as={Col}>
          <Form.Label>About</Form.Label>
            <Form.Control name="about" as="textarea" rows="3" type="text" value={this.state.about} onChange={this.handleInputChange} placeholder="share with us about yourself" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <div key='default-radio' className='mb-3'>
              <Form.Check 
                type='radio'
                id={`default-radio-1`}
                label='Male'
                name="gender"
                onClick={this.handleInputChange}
                value='male'
              />
              <Form.Check 
                type='radio'
                id={`default-radio-2`}
                label='Female'
                name="gender"
                onClick={this.handleInputChange}
                value='female'
              />
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Do you like Basketball?</Form.Label>
            <div key='default-radio' className='mb-3'>
            <Col sm={12}>
              <Form.Check 
                type='radio'
                id={`default-radio-1`}
                label='My eyes are glued to the TV'
                name="choice1"
                onClick={this.handleInputChange}
                value='My eyes are glued to the TV'
              />
              <Form.Check 
                type='radio'
                id={`default-radio-2`}
                label='Have to get me off the court'
                name="choice1"
                onClick={this.handleInputChange}
                value='Have to get me off the court'
              />
              <Form.Check 
                type='radio'
                id={`default-radio-3`}
                label='College basketball is the best'
                name="choice1"
                onClick={this.handleInputChange}
                value='College basketball is the best'
              />
              <Form.Check 
                type='radio'
                id={`default-radio-4`}
                label='NBA all the way'
                name="choice1"
                onClick={this.handleInputChange}
                value='NBA all the way'
              />
              </Col>
            </div>
          </Form.Group>

         
          
          <Form.Group>

            <Form.Label>What is your view on Music?</Form.Label>

            <Form.Label>What is a definition of Music to you?</Form.Label>

            <div key='default-radio' className='mb-3'>
            <Col sm={12}>
              <Form.Check 
                type='radio'
                id={`default-radio-1`}
                label='Local music rocks'
                name="choice2"
                onClick={this.handleInputChange}
                value='Local music rocks'
              />
              <Form.Check 
                type='radio'
                id={`default-radio-2`}
                label='Music is life'
                name="choice2"
                onClick={this.handleInputChange}
                value='Music is life'
              />
              <Form.Check 
                type='radio'
                id={`default-radio-3`}
                label='Music is an escape'
                name="choice2"
                onClick={this.handleInputChange}
                value='Music is an escape'
              />
              <Form.Check 
                type='radio'
                id={`default-radio-4`}
                label='Jamming out is the shit'
                name="choice2"
                onClick={this.handleInputChange}
                value='Jamming out is the shit'
              />
              </Col>
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Hackathon?</Form.Label>
            <div key='default-radio' className='mb-3'>
            <Col sm={12}>
              <Form.Check 
                type='radio'
                id={`default-radio-1`}
                label='Only Angelhack'
                name="choice3"
                onClick={this.handleInputChange}
                value='Only Angelhack'
              />
              <Form.Check 
                type='radio'
                id={`default-radio-2`}
                label="Free food... I'm in"
                name="choice3"
                onClick={this.handleInputChange}
                value="Free food... I'm in"
              />
              <Form.Check 
                type='radio'
                id={`default-radio-3`}
                label='Sabeen rocks'
                name="choice3"
                onClick={this.handleInputChange}
                value='Sabeen rocks'
              />
              <Form.Check 
                type='radio'
                id={`default-radio-4`}
                label='Gotta work on my catching'
                name="choice3"
                onClick={this.handleInputChange}
                value='Gotta work on my catching'
              />
              </Col>
            </div>
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