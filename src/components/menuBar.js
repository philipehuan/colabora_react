import React, {Component} from "react";


import {Menubar} from "primereact/menubar";
import "../routes/App.css";
import ProfilePerson from "./profilePerson";
import {Link, withRouter} from "react-router-dom";



export class MenuBar extends Component {

    constructor() {
        super();

        this.state = {
            visibleRight:false,
            items:[
                {
                    label:'Recursos Humanos ',
                    icon:'pi pi-fw pi-users',
                    items:[
                        {
                            label:'Colaborador',
                            icon: 'pi pi-angle-double-right',
                            items:[
                                {
                                    label:'Novo Colaborador',
                                    icon:'pi pi-fw pi-plus',
                                    command:()=>{window.location= "novo_colaborador"},
                                },
                                {
                                    label:'Listar Colaboradores',
                                    icon:'pi pi-fw pi-list',
                                    command:()=>{window.location="/Lista_Colaboradores"},
                                },

                            ]
                        },
                        {
                            label:'Formação',
                            icon:'pi pi-angle-double-right',
                            items : [
                                {
                                    label : 'Cadastrar Formação',
                                    icon : 'pi pi-fw pi-plus',
                                    command:()=>{window.location="formacao_colaborador"}
                                },
                                {
                                  label : 'Listar Formação',
                                  icon : 'pi fw-pi pi-list',
                                  command : () => {window.location="lista_formacao"}
                                },
                            ]
                        },

                    ]
                },
                {
                    label:'Organizacional',
                    icon:'pi pi-fw pi-sitemap',
                    items:[
                        {
                            label:'Departamentos',
                            icon:'pi pi-fw pi-angle-double-right',
                            command : ()=>{window.location="departamentos"}
                        },
                        {
                            label:'Funções e Cargos',
                            icon:'pi pi-fw pi-angle-double-right',
                            command : ()=>{window.location="funcao"}
                        },
                    ]
                },
                {
                    label:'Contabil',
                    icon:'pi pi-fw pi-chart-line',
                    items:[
                        {
                            label:'Contratos',
                            icon:'pi pi-fw pi-file',

                        },
                        {
                            label:'Pagamento',
                            icon:'pi pi-fw pi-money-bill',

                        },
                        {
                            label:'Gestão de Salários',
                            icon:'pi pi-fw pi-dollar',
                        },
                        {
                            label: 'Benefícios',
                            icon: 'pi pi-fw pi-heart',
                        },
                    ]
                },
                {
                    label:'Férias',
                    icon:'pi pi-fw pi-globe',
                    items:[
                        {
                            label:'Registrar Férias',
                            icon:'pi pi-fw pi-calendar-plus',

                        },
                        {
                            label:'Ver Férias',
                            icon:'pi pi-fw pi-eye',
                        },
                    ]
                },
                {
                    label : 'Hora Extra',
                    icon : 'pi pi-fw pi-clock'
                },


            ]
        };
    }



    render() {
        return (
            <div className="content-section implementation">
                <Menubar  model={this.state.items} style={{'border-radius':'0','margin':'0'}}>
                    <ProfilePerson></ProfilePerson>
                </Menubar>
            </div>
        )
    }
}

export default withRouter(MenuBar);