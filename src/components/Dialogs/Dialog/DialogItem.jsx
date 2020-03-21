import React from 'react';
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (<div className={s.dialog + " " + s.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>)
};

const DialogItem = (props) => {
    let dialogElement = props.dialogsData.map(
        dialog => <Dialog name={dialog.name} id={dialog.id}/>
    );
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElement}
            </div>
        </div>)
}
export default DialogItem;