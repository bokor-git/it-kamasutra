import React from "react";

export const TodoItem = ({id, title, completed, del, check}) => {
    return <div>{title} {completed ? "✔" : "✘"}
    <input style={completed?{display:"none"}:{display:"initial"}} type="checkbox" checked={completed} onChange={()=>check(id)}/>
    <button style={!completed?{display:"none"}:{display:"initial"}}  onClick={()=>del(id)}>🔫</button></div>
}
