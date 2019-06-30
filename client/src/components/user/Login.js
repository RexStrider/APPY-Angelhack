import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate } from "../auth";
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';

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
            return <Redirect to="/" />;
        }

        return (
            <div className="container signin-page auth-page">
                <h2 className="signin-title">Sign In</h2>
                <br />
                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>

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
