import React from 'react';

import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/DialogItem";
import MassageItem from "./Massage/MassageItem";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogItem dialogsData={props.dialogsData} />
            <MassageItem massageData={props.massageData} />
        </div>)
}
export default Dialogs;
