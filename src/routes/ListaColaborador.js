import React,{Component} from "react";
import Navbar_brand from "../components/navbar_brand";
import MenuBar from "../components/menuBar";

class ListaColaborador extends Component{
    constructor() {
        super();
    }


    render() {
        return(
            <div>
                <header>
                    <Navbar_brand/>
                    <MenuBar />
                </header>
                
            </div>
        )
    }
}

export default ListaColaborador;