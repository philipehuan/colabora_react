import React,{Component} from "react";

import "../routes/App.css";
import Navbar_brand from "../components/navbar_brand";
import MenuBar from "../components/menuBar";
import axios from 'axios';

class Departamentos extends Component{
    state={
        departamento:[]
    }

    componentDidMount() {
        axios({
            method:'get',
            url:'http://localhost:8000/colabora/coreapp/departamento/',
            responseType:'json'
        })
            .then(res=>{
                const departamento = res.data;
                this.setState({departamento})
            })
    }

    render() {
        return(
            <div>
                <header>
                    <Navbar_brand />
                    <MenuBar />
                </header>
                <ul>
                    {this.state.departamento.map(dep=><li>{dep.nomedepartamento}</li>)}
                    {this.state.departamento.map(dep2=><li>{dep2.id}</li>)}
                </ul>
            </div>
        )
    }
}

export default Departamentos;