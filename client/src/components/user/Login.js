import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

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
                <Row>
                    <Col>
                        <label>Username</label>
                        <input
                            id='username'
                            value={this.state.username}
                            onChange={this.handleInputChange}/>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <label>Password</label>
                        <input
                            id='password'
                            value={this.state.password}
                            onChange={this.handleInputChange}/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <button onClick={this.clickHandler} >
                            Submit
                        </button>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <a href='#'>Forgot your password?</a>
                    </Col>
                </Row>
                
            </Container>
        )
    }
    
}

export default Login;