import React, {useState} from 'react';
import s from "./Users.module.css";

const UserPagesCount = ({totalUsersCount, pageSize, onPageChanged, currentPage, portionSize}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {pages.push(i)}
    let portionCount = Math.ceil( pageCount/ portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    console.log(portionNumber);
    let leftPortionPageNumber = (portionNumber-1)*portionSize+1;
    let rightPortionPageNumber = portionNumber*portionSize
return <div className={s.border}>
    {portionNumber>1 &&
    <button onClick={()=>{setPortionNumber(portionNumber-1)}}>prev</button>}
    {pages.filter(p=>p>=leftPortionPageNumber && p<=rightPortionPageNumber)
        .map(p => {
            return <span className={currentPage===p?s.selected:s.pageNumber} key={p} onClick={(e) => {
                onPageChanged(p)
            }} >{p}</span>
        })}
    {portionCount>portionNumber&&
    <button onClick={()=>{ setPortionNumber(portionNumber+1)}}>next</button>}
    </div>
};
export default UserPagesCount;