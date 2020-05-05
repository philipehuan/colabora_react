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
                {Tipo : 'Não Possui'},
                {Tipo : 'A'},
                {Tipo : 'B'},
                {Tipo : 'AB'},
                {Tipo : 'C'},
                {Tipo : 'D'},
                {Tipo : 'E'}
            ],

            sexo:null,
            sexos:[
                {sexo:'M'},
                {sexo:'F'}
            ],

            funcoes : [],
            departamentos : [],
            disab_text:true,
        }

        this.departamentoService = new DepartamentoService();
        this.funcaoService = new funcaoService();
        this.colaboradorService = new colaboradorService();
    }

    componentDidMount() {
        this.departamentoService.getDepartamento().then(data => this.setState({departamentos:data}));
        this.funcaoService.getFuncao().then(data => this.setState({funcoes:data}));
    }

    handleSubmit(event) {
       event.preventDefault()
       this.colaboradorService.setColaborador({
           nome:this.state.nome,
           nascimento : this.state.data_nasc,
           rg : this.state.RG,
           cpf: this.state.CPF,
           telefone : this.state.Telefone,
           cnh_tipo: this.state.cnh_categoria,
           cnh: this.state.cnh_numero,
           sexo : this.state.sexo,
           departamento : this.state.departamento,
           funcao : this.state.funcao
       })
           .then(data => console.log(data))
           // .then(window.location.replace("/Lista_Colaboradores"))
           .then(window.location.reload(true));
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
                          <InputMask mask={"99-99-9999"} id="in2" value={this.state.data_nasc} onChange={(e) => this.setState({data_nasc: e.target.value})} />
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
                          <InputMask mask={"9999999-9999"} id="in5" value={this.state.Telefone} onChange={(e) => this.setState({Telefone: e.target.value})} keyfilter={/^[0-9]*$/} />
                          <label htmlFor="in5">Telefone</label>
                        </span>
                       </div>

                       <div className={"col-4"}>
                          <select onChange={(e) => this.setState({cnh_categoria: e.target.value})}>
                              <option selected>CNH Categoria</option>
                              {this.state.cnhs.map(c => (
                                  <option value={c.Tipo}>{c.Tipo}</option>
                              ))}
                          </select>
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
                          <select onChange={(e)=> this.setState({sexo:e.target.value})}>
                              <option selected>Sexo</option>
                              {this.state.sexos.map(s => (
                                  <option value={s.sexo}>{s.sexo}</option>
                              ))}
                          </select>
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