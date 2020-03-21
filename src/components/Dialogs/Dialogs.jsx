import React from 'react';

import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/DialogItem";
import MassageItem from "./Massage/MassageItem";


const Dialogs = (props) => {

    let newMassageBody = props.newMassageBody;

    let onSendMassageButtonClick= ()=>{
        debugger
        props.onSendMassageButtonClick();
    };
    let onNewMessageChange= (e)=>{
        debugger
        let body =  e.target.value;
        props.onNewMessageChange(body)
    };
    return (
        <div className={s.dialogs}>
            <div><DialogItem dialogsData={props.dialogsData}/></div>
            <div><MassageItem massageData={props.massageData}/></div>
            <div>
                <div className={s.addMessage}>
                    <textarea onChange={onNewMessageChange}
                              value={newMassageBody}
                              placeholder='Entre your messasge'> </textarea>
                </div>
                <div>
                    <button onClick={onSendMassageButtonClick}> Send</button>
                </div>
            </div>
        </div>)
}
export default Dialogs;

