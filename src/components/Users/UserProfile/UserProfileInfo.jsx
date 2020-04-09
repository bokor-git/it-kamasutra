import React from 'react';
import s from "./UserProfile.module.css"
import Loading from "../../common/Conponents/Loading";



const UserProfileInfo = (props) => {
    if (!props.profileData) {
        return <Loading/>
    }
    return <div className={s.profile}>
        <h1>{props.profileData.fullName} </h1>
        <img className={s.avatar} src={props.profileData.photos.large}/>
        <h4>About me: {props.profileData.aboutMe}</h4>
        <div className={s.work}> Need work: <img
            src={props.profileData.lookingForAJob ? "https://cdn.onlinewebfonts.com/svg/img_172017.png" :
                "https://cdn.onlinewebfonts.com/svg/img_391838.png"}/>
        </div>
        <div>About job: {props.profileData.lookingForAJobDescription} </div>
        <div>
            <div>{props.profileData.contacts.facebook}</div>
            <div>{props.profileData.contacts.website}</div>
            <div>{props.profileData.contacts.vk}</div>
            <div>{props.profileData.contacts.instagram}</div>
            <div>{props.profileData.contacts.youtube}</div>
        </div>
    </div>
};
export default UserProfileInfo;
