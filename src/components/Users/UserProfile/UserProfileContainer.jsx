import {connect} from "react-redux";
import UserProfile from "./UserProfile";
import React from "react";
import {getProfileInfo, getProfileStatus, updateProfileStatus} from "../../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class MyProfileContainerAPI extends React.Component {
    componentDidMount() {
        let userId= this.props.match.params.userID;
        if(!userId){
           userId = this.props.authUserId
            if (!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getProfileInfo(userId);
        this.props.getProfileStatus(userId)
}
    render() {
        return <UserProfile profileData={this.props.profileData}
                            status={this.props.status}
                            updateProfileStatus={this.props.updateProfileStatus}
                            getProfileStatus={ this.props.getProfileStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profileData: state.myProfilePage.profileData,
        status: state.myProfilePage.status,
        authUserId: state.auth.userID
    }
};

export default compose(
    connect(mapStateToProps, {getProfileStatus, updateProfileStatus, getProfileInfo}),
    withRouter)
(MyProfileContainerAPI)


