import React, {Component} from "react";

import "../routes/App.css";
import {Fieldset} from "primereact/fieldset";
import {InputText} from "primereact/inputtext";
import {InputMask} from "primereact/inputmask";
import {FileUpload} from "primereact/fileupload";
import {Growl} from 'primereact/growl';
import DropDown from "./DropDownComponent";


class NovoColaboradorComponent extends Component{
    constructor() {
        super();
        this.handleSubmit=this.handleSubmit.bind(this);

        this.state={
            value: null,
            value2:null,
            value3:null,
            value4:null,
            value5:null,
            value6:null,
            value7:null,
            value8:null,
            value9:null,
            value10:null,
            value11:null,

            cnh:null,
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
            ]
        }
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
                          <InputText id="in" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} keyfilter={/^[a-zA-Z]*$/} />
                          <label htmlFor="in">Nome</label>
                        </span>
                     </div>

                       <div className={"col-4"}>
                        <span className="p-float-label">
                          <InputMask mask={"99/99/9999"} id="in2" value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value2})} />
                          <label htmlFor="in2">Data de Nascimento</label>
                        </span>
                       </div>

                       <div className={"col-4"}>
                        <span className="p-float-label">
                          <InputText id="in3" value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value3})} keyfilter={/^[0-9]*$/} />
                          <label htmlFor="in3">RG</label>
                        </span>
                       </div>
                   </div>
                     <br/>
                   <div className={"row"}>
                       <div className={"col-4"}>
                        <span className="p-float-label">
                          <InputMask mask={"999.999.999-99"} id="in4" value={this.state.value4} onChange={(e) => this.setState({value4: e.target.value4})} keyfilter={/^[0-9]*$/} />
                          <label htmlFor="in4">CPF</label>
                        </span>
                       </div>

                       <div className={"col-4"}>
                        <span className="p-float-label">
                          <InputMask mask={"(99) 99999-9999"} id="in5" value={this.state.value5} onChange={(e) => this.setState({value5: e.target.value5})} keyfilter={/^[0-9]*$/} />
                          <label htmlFor="in5">Telefone</label>
                        </span>
                       </div>

                       <div className={"col-4"}>
                          <DropDown value={this.state.cnh} options={this.state.cnhs} optionLabel={"Tipo"} placeholder={"CNH TIPO"}
                                    onChange={(e)=>this.setState({cnh : e.value})}/>
                       </div>
                   </div>
                     <br/>
                   <div className={"row"}>
                       <div className={"col-4"}>
                          <span className="p-float-label">
                          <InputText id="in6" value={this.state.value7} onChange={(e) => this.setState({value7: e.target.value7})} keyfilter={/^[0-9]*$/} />
                          <label htmlFor="in6">CNH</label>
                        </span>
                       </div>

                      <div className={"col-4"}>
                          <DropDown optionLabel="sexo" value={this.state.sexo} options={this.state.sexos}
                                    onChange={(e) => {this.setState({sexo: e.value})}} placeholder="Sexo"/>
                      </div>

                      <div className={"col-4"}>
                          <FileUpload name={"image"}  accept={"image/*"} mode={"basic"} chooseLabel={"Foto do Colaborador"} />
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