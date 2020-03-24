import React,{Component} from "react";
import Navbar_brand from "../components/navbar_brand";
import MenuBar from "../components/menuBar";
import NovaFormacao_Component from "../components/NovaFormacao_Component";

class NovaFormacao extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <header>
                    <Navbar_brand/>
                    <MenuBar/>
                </header>
                <NovaFormacao_Component />
            </div>
        )
    }
}

export default NovaFormacao;