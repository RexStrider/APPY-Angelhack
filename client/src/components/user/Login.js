import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';

import { signin } from '../auth';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    clickHandler = event => {
        event.preventDefault();
        // console.log('click handled');

        signin(this.state);
    }


    render() {
        console.log(this.state);
        return (
            <Container className='login'>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button
                    variant="primary"
                    type="submit"
                    onClick={this.clickHandler}>
                        Submit
                    </Button>
                </Form>


            </Container>
        )
    }

}

export default Login;