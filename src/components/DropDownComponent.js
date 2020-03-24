import React,{Component} from "react";
import {Dropdown} from "primereact/dropdown";

function DropDown (props) {
    return(
      <Dropdown value={props.value} options={props.options} optionLabel={props.optionLabel} placeholder={props.placeholder}
               onChange={props.onChange} />
    );
}

export default DropDown;