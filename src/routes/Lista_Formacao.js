import React, {Component} from "react";
import Navbar_brand from "../components/navbar_brand";
import {MenuBar} from "../components/menuBar";

class lista_Formacao extends Component{
    constructor() {
        super();
    }

    render() {
        return(
            <React.Fragment>
                <Navbar_brand />
                <MenuBar/>
            </React.Fragment>
        )
    }
}
export default lista_Formacao;