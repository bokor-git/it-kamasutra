import React, {useState} from "react";
import {Screen} from "./Screen";

const Menu = ({setCount,count, isDisable,setDisable})=>{

    if (count===5){setDisable(true)}
    if (count!=5){setDisable(false)}

    return <div style={{border:"solid 1px black", margin:"10px", padding:"10px"}}> <p>menu</p>
    <button disabled={isDisable} onClick={()=>setCount(count+1)}>incr</button>
        <button onClick={()=>setCount(0)}>reset</button></div>
}

const Calc = ()=>{
    const [isDisable, setDisable]=useState(false)
    const [count, setCount]=useState(0)
    return <div style={{border:"solid 1px black", margin:"10px", padding:"10px", width:"200px"}}> <p>Calc</p>
    <Screen count={count} isDisable={isDisable}/>
    <Menu setCount={setCount} count={count} isDisable={isDisable} setDisable={setDisable}/>
    </div>
}

export default  Calc