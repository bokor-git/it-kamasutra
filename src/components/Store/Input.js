import React, {useContext} from "react";
import Context from "./Context";

const Input = () => {
    const{value, setValue, addTodo}=useContext(Context)
    return <div><input type="text" value={value} onChange={event => setValue(event.target.value)}/>
    <button onClick={()=>addTodo(value)}>Add</button></div>

}
export default Input