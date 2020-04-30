import React, {useEffect, useState} from "react";
import {TodoItem} from "./TodoItem";
import * as axios from "axios";
import Context from "./Context";
import Input from "./Input";
import Loading from "../common/Conponents/Loading";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState("")

    useEffect(()=>axios.get('https://jsonplaceholder.typicode.com/todos?_limit=30').then(response => setTodos(response.data)), [])
const addTodo=(value)=>{
        const newTodos = {userId: 1, id: new Date().getTime(), title: value, completed: false}
        const newArr = [...todos, newTodos];
   setTodos(newArr)
}
const del = (id)=>{
    return  setTodos(todos.filter(td => td.id !== id))
}
const check = (id)=>{
       setTodos(todos.map(todo=>{if (todo.id===id){todo.completed=!todo.completed}
        return todo}))

};
   return(
    <Context.Provider value={{value, setValue, addTodo}}>

    <div className="todolist">
        <Input/>
        {todos.length===0&&<Loading/>}
        {todos.map(todo => <TodoItem {...todo} del={del} check={check}/>)}
    </div>
        </Context.Provider>)
}
export default TodoList
