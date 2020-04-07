import React from 'react';
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <h1>USER LIST</h1>
        <div>
            {pages.map(p => {
                return <span onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p && s.selected}>{p}</span>
            })}
        </div>
        {
            props.users.map(u =>
                <div className={s.users} key={u.id}>
                        <span>
                            <NavLink to={"/Profile/" + u.id}>
                            <div><img
                                src={u.photos.small != null ? u.photos.small : "https://www.shareicon.net/data/512x512/2016/07/21/799325_user_512x512.png"}
                                alt="No Avatar"/></div>
                                      </NavLink>
                            <div>
                                {u.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === u.id)
                                    }
                                            onClick={() => {
                                                props.unfollow(u.id)
                                            }
                                            }>Unfollow</button> :
                                    <button disabled={props.followingInProgress.some(id => id === u.id)
                                    }
                                            onClick={() => {
                                                props.follow(u.id)
                                            }}>Follow</button>}
                                <button>Like</button>
                            </div>
                        </span>
                    <span>
                            <span><div>{u.name}</div>
                                <div>{u.status}</div></span>
                            <span><div>{/*{u.location.city}*/}</div>
                                <div> {/*Likes:{u.likes}*/}</div>
                                <div> {u.id}</div>
                                <div>{/*{u.location.country}*/}</div></span>
                        </span>
                </div>)
        }
    </div>
}


export default Users;