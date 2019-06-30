import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { forgotPassword } from "../../auth";


class ForgotPassword extends Component {
    state = {
        email: "",
        message: "",
        error: ""
    };

    // forgot password handling
    forgotPassword = e => {
        e.preventDefault();
        this.setState({ message: "", error: "" });
        forgotPassword(this.state.email).then(data => {
            if (data.error) {
                console.log(data.error);
                this.setState({ error: data.error });
            } else {
                console.log(data.message);
                this.setState({ message: data.message });
            }
        });
    };

    render() {
        return (
            <div className="reset-form">
                <div className="reset-form-header">
                    <h1 className="page-brand">Appy-AngelHack</h1>
                </div>
                <div className="reset-form-body reset-form-body-1">
                    <div className="reset-form-body-header">
                        <div className="reset-form-body-header-main">
                            <h2>Password Reset</h2>
                        </div>
                        <div className="reset-form-body-header-sub">
                            <p>*Please enter your email below</p>
                        </div>
                    </div>

                    {this.state.message && (
                        <h6 className="success-message">{this.state.message}</h6>
                    )}
                    {this.state.error && (
                        <h6 className="bg-warning">{this.state.error}</h6>
                    )}

                    <div className="reset-form-body-details">
                        <form>
                            <div className="form-group mt-5">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={this.state.email}
                                    name="email"
                                    onChange={e =>
                                        this.setState({
                                            email: e.target.value,
                                            message: "",
                                            error: ""
                                        })
                                    }
                                    autoFocus
                                />
                            </div>
                            <button
                                onClick={this.forgotPassword}
                                className="button button-main"
                            >
                                Send Reset Link
                            </button>
                            <br />
                            <br />
                            <Link to="/">
                                <button className="button button-danger">
                                    Back Home
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>  
        );
    }
}

export default ForgotPassword;