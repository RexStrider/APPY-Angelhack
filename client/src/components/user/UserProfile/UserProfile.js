import React, { Component } from "react";
import { isAuthenticated } from "../../auth";
import { Redirect, Link } from "react-router-dom";
import { read } from "../UserApi/apiUser";
import DefaultProfile from "../../../assets/images/avatar.png";
import DeleteUser from "../UserActions/DeleteUser";


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            redirectToSignin: false,
            error: "",
        };
    }

    init = userId => {
        const token = isAuthenticated().token;
        read(userId, token).then(data => {
            if (data.error) {
                this.setState({ redirectToSignin: true });
            } else {
                console.log(data);
                this.setState({ user: data });
            }
        });
    };

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.init(userId);
    }

    componentWillReceiveProps(props) {
        const userId = props.match.params.userId;
        console.log(props.match.params.userId);
        this.init(userId);
    }

    render() {
        const { redirectToSignin, user } = this.state;

        if (redirectToSignin) return <Redirect to="/signin" />;

        // const photoUrl = user._id
        //     ? `${process.env.REACT_APP_API_URL}/user/photo/${
        //           user._id
        //       }?${new Date().getTime()}`
        //     : DefaultProfile;
        console.log(this.state.user);
        // console.log(this.state.user.location);
        // console.log(user.name);

        return(
            <h1>User page</h1>
        )
    }

    // render() {
    //     const { redirectToSignin, user } = this.state;
    //     if (redirectToSignin) return <Redirect to="/signin" />;

    //     const photoUrl = user._id
    //         ? `${process.env.REACT_APP_API_URL}/user/photo/${
    //               user._id
    //           }?${new Date().getTime()}`
    //         : DefaultProfile;

    //     return (
    //         <div>
    //             <div className="container">
    //                 <h2 className="mt-5 mb-5" style={{ fontFamily: "Merienda, cursive"}}>User Profile</h2>
    //                 <div className="row">
    //                     <div className="col-md-4">
    //                         <img
    //                             style={{ height: "200px", width: "auto", borderRadius: '50%' }}
    //                             className="img-thumbnail"
    //                             src={photoUrl}
    //                             onError={i => (i.target.src = `${DefaultProfile}`)}
    //                             alt={user.name}
    //                         />
    //                     </div>

    //                     <div className="col-md-8">
    //                         <div className="lead mt-2" style={{ letterSpacing: '2px'}}>
    //                             <p>Hello <span className="page-brand">{user.name}</span></p>
    //                             <p>Email: {user.email}</p>
    //                             <p>{`Joined ${new Date(
    //                                 user.created
    //                             ).toDateString()}`}</p>
    //                         </div>

    //                         {isAuthenticated().user &&
    //                         isAuthenticated().user._id === user._id ? (
    //                             <div className="d-inline-block">
    //                                 <Link to={`/user/edit/${user._id}`}>
    //                                     <button className="button button-green button-profile">
    //                                         Edit Profile
    //                                     </button>
    //                                 </Link>
    //                                 <DeleteUser userId={user._id} />
    //                             </div>
    //                         ) : 'No User Available!'}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
}

export default Profile;