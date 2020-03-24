import React,{Component} from "react";
import {Fieldset} from "primereact/fieldset";
import {InputMask} from "primereact/inputmask";
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import DropDown from "./DropDownComponent";


class NovaFormacao_Component extends Component{
    constructor(props) {
        super(props);
       this.state={
           colaborador : null,
           colaboradores : [
           //    TODO Service to list the colaborators
               {colaborador:"colaborador"},
           ],

           tipoFormacao : null,
           tiposFormacoes : [
               {tipo : "Graduação"},
               {tipo : "Pós-Graduação"},
               {tipo : "Mestrado"},
               {tipo : "Doutorado"},
               {tipo : "Extensão"},
               {tipo : "Certificação"},
           ],

           nomeCurso : null,
           dataInicio : null,
           dataFim : null,
       }
    }

    render() {
        return(
            <div className={"container-fluid"}>
              <Fieldset legend={"Nova Formação"} className={"fieldset"} style={{width:"70%"}}>
                  <form >
                  <div className={"row"}>
                      <div className={"col-4"}>
                         <DropDown  value={this.state.colaborador} options={this.state.colaboradores} optionLabel={"colaborador"}
                                 onChange={(e) => this.setState({colaborador : e.value})} placeholder={"Colaborador"} />
                      </div>

                      <div className={"col-4"}>
                         <DropDown value={this.state.tipoFormacao} options={this.state.tiposFormacoes} optionLabel={"tipo"}  onChange={(e)=>
                             this.setState({tipoFormacao : e.value})} placeholder={"Tipo de Formação"} />
                      </div>

                      <div className={"col-4"}>
                          <span className="p-float-label">
                          <InputText  id="in" value={this.state.nomeCurso} onChange={(e) => this.setState({nomeCurso: e.value})} />
                          <label htmlFor="in">Nome do Curso</label>
                        </span>
                      </div>
                  </div>
                  <br/>
                  <div className={"row"}>
                      <div className={"col-4"}>
                          <span className="p-float-label">
                          <InputText  id="in2" value={this.state.instituicao} onChange={(e) => this.setState({instituicao: e.target.instituicao})} />
                          <label htmlFor="in2">Instituição</label>
                        </span>
                      </div>

                      <div className={"col-4"}>
                          <span className="p-float-label">
                          <InputMask mask={"99/99/9999"} id="in3" value={this.state.dataInicio} onChange={(e) => this.setState({dataInicio: e.target.dataInicio})} />
                          <label htmlFor="in3">Data de Início do curso</label>
                        </span>
                      </div>

                      <div className={"col-4"}>
                          <span className="p-float-label">
                          <InputMask mask={"99/99/9999"} id="in4" value={this.state.dataFim} onChange={(e) => this.setState({datFim: e.target.dataFim})} />
                          <label htmlFor="in4">Data de Término do Curso</label>
                        </span>
                      </div>
                  </div>
                      <br/>
                      <button type={"submit"} className={"btn btn-secondary"} style={{marginLeft:"40%"}}>Salvar <i className={"pi pi-save"}/></button>
                  </form>
              </Fieldset>
            </div>
        )
    }
}

export default NovaFormacao_Component;