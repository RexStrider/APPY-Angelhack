import React from 'react';
import { list } from '../user/UserApi/apiUser';
import DefaultProfile from "../../assets/images/avatar.png";
import { Link } from "react-router-dom";

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ users: data });
            }
        });
    }



    renderUsers = users => (
        <div className="row">
            {users.map((user, i) => (
                <div className="card col-md-4" key={i}>
                    <img
                        style={{ height: "200px", width: "80%", margin: '10px auto 0 auto' }}
                        className="img-thumbnail"
                        src={`${process.env.REACT_APP_API_URL}/user/photo/${
                            user._id
                        }`}
                        onError={i => (i.target.src = `${DefaultProfile}`)}
                        alt={user.name}
                    />
                    <div className="card-body" style={{ color: 'black' }}>
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.email}</p>
                        <Link
                            to={`/user/${user._id}`}
                            className="btn btn-raised btn-primary btn-sm"
                        >
                            View Profile
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );

    render() {
        const { users } = this.state;
        
        users.filter(user => {
            console.log(user.online);
        });

        return (
            <div className="container">
                <h2 className="mt-5 mb-5" style={{ fontFamily: 'Merienda, cursive'}}>Users</h2>
                {this.renderUsers(users)}
            </div>
        );
    }
}

export default Users;