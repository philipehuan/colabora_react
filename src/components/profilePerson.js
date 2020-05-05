import React, {Component} from "react";

import "../routes/App.css";
import {SplitButton} from "primereact/splitbutton";
import {Sidebar} from "primereact/sidebar";
import {Button} from "primereact/button";

class ProfilePerson extends Component{

    constructor() {
        super();
        this.state = {
            visibleRight: false,
            items : [
                {
                  label:'Home',
                  icon : 'pi pi-home',
                  command : () => {window.location= "/"},
                },
                {
                    label : 'Perfil',
                    icon : 'pi pi-user-edit',
                },
                {
                    label : 'Configurações',
                    icon : "pi pi-cog",
                },
                {
                    separator : true,
                },
                {
                    label : 'Sair',
                    icon : 'pi pi-power-off',
                }
            ]
        }
    }


    render() {
        return (
            <div className="content-section implementation">
            <SplitButton  icon="pi pi-user" onClick={(e) => this.setState({visibleRight:true})} className="p-button-secondary" model={this.state.items}></SplitButton>
                <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={(e) => this.setState({visibleRight: false})} >
                    <h1 style={{fontWeight:'normal'}}>Right Sidebar</h1>
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false})} label="Save" className="p-button-success"  style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false})} label="Cancel" className="p-button-secondary"/>
                </Sidebar>
            </div>
        )
    }
}


export default ProfilePerson;