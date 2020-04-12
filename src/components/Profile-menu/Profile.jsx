import React from 'react';
import s from "./Profile.module.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Profile extends React.Component {
    /* componentDidMount() {
         if (this.props.initialized=true){
             const img= this.props.profileData.photos.small

         }
     }
 */
    render() {
        return (
            <div className={s.profile}>
                <h3>Profile menu</h3>
                {this.props.isAuth ?
                    <img src={this.props.profileData != null ? this.props.profileData.photos.small :
                        "https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"}/> :
                    <img src="https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"/>
                }
                <h4><NavLink to="/Dialogs" activeClassName={s.active}>My Dialogs</NavLink></h4>
                <h4><NavLink to="/Posts" activeClassName={s.active}>My Posts</NavLink></h4>
                <h4><NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink></h4>
            </div>)
    }
}

let mapStateToProps = (state) => {
    return {
        profileData: state.myProfilePage.profileData,
        isAuth: state.auth.isAuth

    }
}
const ProfileContainer = connect(mapStateToProps, {})(Profile)
export default ProfileContainer;