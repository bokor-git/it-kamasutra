import React from 'react';

import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/DialogItem";
import MassageItem from "./Massage/MassageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utilits/validators/validators";

const maxLength100 =maxLengthCreator(100);

const MessageForm =(props)=>{
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
                     name={"newMassageBody"}
                     placeholder={"Your massage"}
               validate={[required, maxLength100]}/>
        <button> Send massage</button>
    </form>
};

const MessageFormRedux = reduxForm({
    form: 'massage'
})(MessageForm);



const Dialogs = (props) => {

    let onSubmit= (data)=>{
        props.onSendMassageButtonClick(data.newMassageBody);
    };
    return (
        <div className={s.dialogs}>
            <div><DialogItem dialogsData={props.dialogsData}/></div>
            <div><MassageItem massageData={props.massageData}/></div>
           <MessageFormRedux onSubmit={onSubmit}/>
        </div>)
}
export default Dialogs;

