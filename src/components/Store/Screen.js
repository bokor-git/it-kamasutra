import React from "react";

export const Screen = ({count, isDisable}) => {
    return <div style={isDisable ? {border: "solid 1px black", margin: "10px", padding: "10px", color: "red"} :
        {border: "solid 1px black", margin: "10px", padding: "10px"}}><p>{count}</p></div>
}