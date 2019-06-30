import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate } from "../auth";
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import './Login.css';

<<<<<<< HEAD
class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error: "",
            redirectToReferer: false,
            loading: false,
        };
    }

    handleChange = name => event => {
        this.setState({ error: "" });
        this.setState({ [name]: event.target.value });
    };

    // form submitting
    clickSubmit = event => {
        event.preventDefault();
        this.setState({ loading: true });
        const { email, password } = this.state;
        const user = {
            email,
            password
        };
        // console.log(user);
        signin(user).then(data => {
            if (data.error) {
                this.setState({ error: data.error, loading: false });
            } else {
                // authenticate
                authenticate(data, () => {
                    this.setState({ redirectToReferer: true });
                });
            }
        });
    };
=======
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
>>>>>>> 18a24e2febe9f2ee7f13706bff34fa86611713a5

    signinForm = (email, password, recaptcha) => (
        <form>
            <div className="form-group">
                <label>Email</label>
                <input
                    onChange={this.handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    onChange={this.handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>
            <button
                onClick={this.clickSubmit}
                className="button button-main"
            >
                Sign in
            </button>
        </form>
    );

    render() {
        const {
            email,
            password,
            error,
            redirectToReferer,
            loading,
        } = this.state;

        if (redirectToReferer) {
            return <Redirect to="/posts" />;
        }

        return (
<<<<<<< HEAD
            <div className="container signin-page auth-page">
                <h2 className="signin-title">Log In Your Account</h2>
                <br />
                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>
=======
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
>>>>>>> 18a24e2febe9f2ee7f13706bff34fa86611713a5

                {loading ? (
                    <div className="jumbotron text-center">
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    ""
                )}

                {this.signinForm(email, password)}

                <div style={{ marginTop: '40px'}}>
                    <p>
                        Don't have an account?
                        <Link
                            to="/signup"
                            className="btn-link"
                        >
                            {" "}
                            Sign Up
                        </Link>
                    </p>
                    <p>
                        Forgot your account?
                        <Link
                            to="/forgot-password"
                            className="btn-link"
                        >
                            {" "}
                            Reset Password
                        </Link>
                    </p>
                </div>
                <br />           
            </div>
        );
    }
}
export default Signin;
