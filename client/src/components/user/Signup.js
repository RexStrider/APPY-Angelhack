import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Name: '',
      City: '',
      Email: '',
      Password: '',
      Hometown: '',
      choice1: '',
      choice2: '',
      choice3: '',
      error: '',
      open: false
    }
  }
  

  handleInputChange = event => {
    // console.log(event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  clickHandler = () => {
    console.log("click handled");
  }

  render() {
    console.log(this.state);
    return (
      <Container className="Signup">
        <Form>

          <Form.Group as={Col}>
            <Form.Label >Name</Form.Label>
            <Form.Control name="Name" value={this.state.Name} onChange={this.handleInputChange} placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control name="City" value={this.state.City} onChange={this.handleInputChange} placeholder="Enter City" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control name="Email" value={this.state.Email} type="email" onChange={this.handleInputChange} placeholder="Enter email" />
          </Form.Group>


          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control name="Password" type="password" value={this.state.Password} onChange={this.handleInputChange} placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Hometown</Form.Label>
            <Form.Control name="Hometown" value={this.state.Hometown} onChange={this.handleInputChange} placeholder="Enter Hometown" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Basketball</Form.Label>
            <div key='default-radio' className='mb-3'>
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
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Music</Form.Label>
            <div key='default-radio' className='mb-3'>
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
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label>Hackathon</Form.Label>
            <div key='default-radio' className='mb-3'>
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
