import React,{Component} from "react";

import "../routes/App.css";
import Navbar_brand from "../components/navbar_brand";
import MenuBar from "../components/menuBar";

class Departamentos extends Component{

    render() {
        return(
            <div>
                <header>
                    <Navbar_brand />
                    <MenuBar />
                </header>
            </div>
        )
    }
}

export default Departamentos;