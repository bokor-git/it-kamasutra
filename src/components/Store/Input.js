import React, {useContext} from "react";
import Context from "./Context";
import * as axios from "axios";

const Input = () => {
    const{value, setValue, addTodo, items, setItems, setTodos, addItems}=useContext(Context)


    return <div><input type="text" value={value} onChange={event => setValue(event.target.value)}/>
        <button onClick={()=>addTodo(value)}>Add my todo</button>
        <div><input type="number" step={1}  onChange={event => setItems(event.target.value)}/>
        <button onClick={()=>addItems(items)}>NewItems</button></div>

  </div>

}
export default Input