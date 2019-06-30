import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { resetPassword } from "../../auth";



class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            message: "",
            error: ""
        };
    }

    resetPassword = e => {
        e.preventDefault();
        this.setState({ message: "", error: "" });

        resetPassword({
            newPassword: this.state.newPassword,
            resetPasswordLink: this.props.match.params.resetPasswordToken
        }).then(data => {
            if (data.error) {
                console.log(data.error);
                this.setState({ error: data.error, newPassword: "" });
            } else {
                console.log(data.message);
                this.setState({ message: data.message, newPassword: "" });
            }
        });
    };

    render() {
        return (
            <div className="reset-form">
                <div className="reset-form-header">
                    <h1 className="page-brand">Appy-AngelHack</h1>
                </div>
                <div className="reset-form-body reset-form-body-2" style={{ padding: '10rem 2rem'}}>
                    <div className="reset-form-body-header">
                        <div className="reset-form-body-header-main">
                            <h2>Reset your Password</h2>
                        </div>
                        <div className="reset-form-body-header-sub">
                            <p>*Please enter your new password</p>
                        </div>
                    </div>
                    {this.state.message && (
                        <h4 className="bg-success">{this.state.message} 
                        <Link to="/"> Sign In Now</Link>
                    </h4>
                        )}
                    {this.state.error && (
                        <h4 className="bg-warning">{this.state.error}</h4>
                    )}
                    <div className="reset-form-body-details">
                        <form
                            style={{ display: this.state.message.length ? "none" : "" }}>
                            <div className="form-group mt-5">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Your new password"
                                    value={this.state.newPassword}
                                    name="newPassword"
                                    onChange={e =>
                                        this.setState({
                                            newPassword: e.target.value,
                                            message: "",
                                            error: ""
                                        })
                                    }
                                    autoFocus
                                />
                            </div>
                            <button
                                onClick={this.resetPassword}
                                className="button button-danger"
                            >
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>                   
        );
    }
}

export default ResetPassword;