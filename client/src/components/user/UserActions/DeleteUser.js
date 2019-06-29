import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticated, signout } from "../../auth";
import { remove } from "../userapi/apiUser";


class DeleteUser extends Component {
    state = {
        redirect: false
    };

    // Delete user handling
    deleteAccount = () => {
        const token = isAuthenticated().token;
        const userId = this.props.userId;
        remove(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                // signout user
                signout(() => console.log("User is deleted"));
                // redirect
                this.setState({ redirect: true });
            }
        });
    };

    // Confirming delete again
    deleteConfirmed = () => {
        let answer = window.confirm(
            "Are you sure you want to delete your account?"
        );
        if (answer) {
            this.deleteAccount();
        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return (
            <button
                onClick={this.deleteConfirmed}
                className="button button-danger button-profile"
            >
                Delete Profile
            </button>
        );
    }
}

export default DeleteUser;