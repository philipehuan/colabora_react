import React, {Component} from "react";
import Navbar_brand from "../components/navbar_brand";
import {MenuBar} from "../components/menuBar";
import NovaFormacao_Component from "../components/NovaFormacao_Component";
import formacaoService from "../sevice/formacaoService";
import colaboradorService from "../sevice/colaboradorService";
import {Fieldset} from "primereact/fieldset";
import DropDown from "../components/DropDownComponent";
import {InputText} from "primereact/inputtext";
import {InputMask} from "primereact/inputmask";

class FormacaoColaborador extends Component{

    constructor() {
        super();
    }

    render() {
        return(
            <React.Fragment>
                <header>
                <Navbar_brand />
                <MenuBar />
                </header>
                <NovaFormacao_Component />
            </React.Fragment>
        )
    }
}
export default FormacaoColaborador;