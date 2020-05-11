import React, {Component} from "react";
import {Panel} from "primereact/panel";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import "./login.css";


class Login extends Component{

    constructor() {
        super();
        this.state={
            username:null,
            password:null
        }
    }


    render() {
        return(
            <React.Fragment>
                <div style={{width:'70%', marginLeft:'40%', marginTop:'300px'}}>
                    <form>
                        <div className="row">
                            <div className="col-12"><h2>COLABORA | LOGIN</h2></div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-12">
                                <input type="text" className="input-login" placeholder="Username or Login"/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-4">
                                <input type="password" className="input-login" placeholder="Password" />
                            </div>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-outline-dark" style={{marginLeft:'90px'}}>Sign In <i className="pi pi-sign-in" /> </button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default Login;