import React from 'react';

import s from "./../Dialogs.module.css";


const Message = (props) => {
    return (
        <div className={s.massages}>
            {props.text}
        </div>
    )
}

const MassageItem = (props) => {
    let massageElement = props.massageData.map(
        massage => <Message text={massage.text} id={massage.id}/>)
    return (<div className={s.massages}>
            {massageElement}
        </div>
    )
}
export default MassageItem;