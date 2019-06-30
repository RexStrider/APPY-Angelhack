import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    }

    clickHandler = () => {
        console.log('click handled');
    }


    render() {
        console.log(this.state);
        return (
            <Container className='login'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>


            </Container>
        )
    }

}

export default Login;