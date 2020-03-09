import React from 'react';

import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/DialogItem";
import MassageItem from "./Massage/MassageItem";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <DialogItem/>
            <MassageItem/>
        </div>)
}
export default Dialogs;