import React from 'react';
import s from "./Users.module.css";


const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u =>
                    <div className={s.users} key={u.id}>
                        <span>
                            <div className={s.avatar}><img src={u.photoURL} alt="no"/></div>
                            <div>
                                {u.followed ?
                                    <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                                    <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                                </div>
                        </span>
                        <span>
                            <span><div>{u.fullName}</div>
                                <div>{u.status}</div></span>
                            <span><div>{u.location.city}</div>
                                <div>{u.likes}</div>
                                <div>{u.location.country}</div></span>
                        </span>
                    </div>)
            }
        </div>)
};

export default Users;