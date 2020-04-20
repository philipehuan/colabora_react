import React from "react";

function selectComponent(props) {
   return(
       <select>
           {props.map(p => (
           <option value={pr.value}>{props.conten}</option>
           ))}
       </select>
   )
}