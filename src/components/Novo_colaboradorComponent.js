import React, {Component} from "react";

import "../routes/App.css";
import {Fieldset} from "primereact/fieldset";
import {InputText} from "primereact/inputtext";
import {InputMask} from "primereact/inputmask";
import {FileUpload} from "primereact/fileupload";
import {Growl} from 'primereact/growl';
import DropDown from "./DropDownComponent";
import colaboradorService from "../sevice/colaboradorService";
import DepartamentoService from "../sevice/departamentoService";
import funcaoService from "../sevice/FuncaoService";


class NovoColaboradorComponent extends Component{
    constructor() {
        super();
        this.handleSubmit=this.handleSubmit.bind(this);

        this.state={
            nome: null,
            data_nasc:null,
            RG:null,
            CPF:null,
            Telefone:null,
            cnh_numero:null,
            funcao:null,
            departamento:null,

            cnh_categoria:null,
            cnhs: [
                {id : 1 ,Tipo : 'Não Possui'},
                {id : 2 ,Tipo : 'A'},
                {id: 3 ,Tipo : 'B'},
                {id : 4, Tipo : 'AB'},
                {id : 5 ,Tipo : 'C'},
                {id : 6 ,Tipo : 'D'},
                {id : 7 ,Tipo : 'E'}
            ],

            sexo:null,
            sexos:[
                {sexo:'Masculino'},
                {sexo:'Feminino'}
            ],

            funcoes : [],
            departamentos : [],
            disab_text:true,
        }

        this.departamentoService = new DepartamentoService();
        this.funcaoService = new funcaoService();
    }

    componentDidMount() {
        this.departamentoService.getDepartamento().then(data => this.setState({departamentos:data}));
        this.funcaoService.getFuncao().then(data => this.setState({funcoes:data}));
    }

    handleSubmit(event){
        this.growl.show({severity: 'success', summary: 'Sucesso!', detail: 'Novo colaborador registrado'});
    }
    render() {
        return(
           <div className="content-section">
               <Fieldset legend={'Dados Pessoais - Novo Colaborador'} style={{width:'70%'}} className={"fieldset"}>
                   <form onSubmit={this.handleSubmit}>
                   <div className={"row"}>
                     <div className={"col-4"}>
                        <span className="p-float-label">
                          <InputText id="in" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} keyfilter={/^[a-zA-Z]*$/} />
                          <label htmlFor="in">Nome</label>
                        </span>
                     </div>

                       <div className={"col-4"}>
                        <span className="p-float-label">
                          <InputMask mask={"99/99/9999"} id="in2" value={this.state.data_nasc} onChange={(e) => this.setState({data_nasc: e.target.value})} />
                          <label htmlFor="in2">Data de Nascimento</label>
                        </span>
                       </div>

                       <div className={"col-4"}>
                        <span className="p-float-label">
                          <InputText id="in3" value={this.state.RG} onChange={(e) => this.setState({RG: e.target.value})} keyfilter={/^[0-9]*$/} />
                          <label htmlFor="in3">RG</label>
                        </span>
                       </div>
                   </div>
                     <br/>
                   <div className={"row"}>
                       <div className={"col-4"}>
                        <span className="p-float-label">
                          <InputMask mask={"999.999.999-99"} id="in4" value={this.state.CPF} onChange={(e) => this.setState({CPF: e.target.value})} keyfilter={/^[0-9]*$/} />
                          <label htmlFor="in4">CPF</label>
                        </span>
                       </div>

                       <div className={"col-4"}>
                        <span className="p-float-label">
                          <InputMask mask={"(99) 99999-9999"} id="in5" value={this.state.Telefone} onChange={(e) => this.setState({Telefone: e.target.value})} keyfilter={/^[0-9]*$/} />
                          <label htmlFor="in5">Telefone</label>
                        </span>
                       </div>

                       <div className={"col-4"}>
                          <DropDown value={this.state.cnh_categoria} options={this.state.cnhs} optionLabel={"Tipo"} placeholder={"CNH TIPO"}
                                    onChange={(e)=>this.setState({cnh_categoria : e.value})}/>
                       </div>
                   </div>
                     <br/>
                   <div className={"row"}>
                       <div className={"col-4"}>
                           <span className="p-float-label">
                               <InputText id="in6" value={this.state.cnh_numero} onChange={(e) => this.setState({cnh_numero: e.target.value})} keyfilter={/^[0-9]*$/}  disabled={this.state.cnh_categoria===null ? true:false}/>
                               <label htmlFor="in6">CNH</label>
                               </span>
                       </div>

                      <div className={"col-4"}>
                          <DropDown optionLabel="sexo" value={this.state.sexo} options={this.state.sexos}
                                    onChange={(e) => {this.setState({sexo: e.value})}} placeholder="Sexo"/>
                      </div>

                      <div className="col-4">
                          <select onChange={(e => this.setState({departamento:e.target.value}))}>
                              <option selected>Departamento</option>
                              {this.state.departamentos.map(i =>(
                                  <option value={i.id}>{i.nomedepartamento}</option>
                              ))}
                          </select>
                      </div>
                      {/*<div className={"col-4"}>*/}
                      {/*    <FileUpload name={"image"}  accept={"image/*"} mode={"basic"} chooseLabel={"Foto do Colaborador"} />*/}
                      {/*</div>*/}
                   </div>
                     <br/>
                   <div className="row">
                       <div className="col-4">
                           <select onChange={(e)=> this.setState({funcao:e.target.value})}>
                               <option selected>Função</option>
                               {this.state.funcoes.map(m => (
                                   <option value={m.id}>{m.nomefuncao}</option>
                               ))}
                           </select>
                       </div>
                   </div>
                       <br/>
                       <button type={"submit"} className={"btn btn-secondary"} style={{marginLeft:"40%"}} >Salvar <i className={"pi pi-save"}/> </button>
                   </form>
               </Fieldset>
           </div>
        )
    }
}

export  default NovoColaboradorComponent;