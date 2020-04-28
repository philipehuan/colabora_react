import React, {Component} from "react";

import "../routes/App.css";
import Navbar_brand from "../components/navbar_brand";
import {MenuBar} from "../components/menuBar";
import NovoColaboradorComponent from "../components/Novo_colaboradorComponent";
import {withRouter} from "react-router-dom";

class NovoColaborador extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <header>
                    <Navbar_brand />
                    <MenuBar />
                </header>
                <article>
                   <NovoColaboradorComponent />
                </article>
            </div>
        );
    }

}

export default withRouter(NovoColaborador);