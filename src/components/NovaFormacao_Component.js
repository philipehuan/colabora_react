import React,{Component} from "react";
import {Fieldset} from "primereact/fieldset";
import {InputMask} from "primereact/inputmask";
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import DropDown from "./DropDownComponent";
import formacaoService from "../sevice/formacaoService";
import colaboradorService from "../sevice/colaboradorService";
import {Button} from "primereact/button";


class NovaFormacao_Component extends Component{
    constructor(props) {
        super(props);
       this.state={
           colaborador : null,
           colaboradores : [],
           tipoFormacao : null,
           tiposFormacoes : [
               {tipo : "Graduação"},
               {tipo : "Pós-Graduação"},
               {tipo : "Mestrado"},
               {tipo : "Doutorado"},
               {tipo : "Extensão"},
               {tipo : "Certificação"},
           ],
           instituicao:null,
           nomeCurso : null,
           dataInicio : null,
           dataFim : null,
       }

       this.handleSubmit = this.handleSubmit.bind(this);
       this.formacaoservice =new formacaoService();
       this.colaboradorservice = new colaboradorService();
    }

    componentDidMount() {
        this.colaboradorservice.getColaborador().then(data=> this.setState({colaboradores:data}));
        this.formacaoservice.getFormacao()
    }

    handleSubmit(event){
        event.preventDefault();
       this.formacaoservice.setFormacao({
           colaborador:this.state.colaborador,
           tipo_formacao:this.state.tipoFormacao,
           nome_curso:this.state.nomeCurso,
           instituicao:this.state.instituicao,
           dt_inicio : this.state.dataInicio,
           dt_fim: this.state.dataFim
       }).then(data => console.log(data))
           .then(window.location.replace("/lista_formacao"))
    }

    render() {
        return(
            <div className={"container-fluid"}>
              <Fieldset legend={"Nova Formação"} className={"fieldset"} style={{width:"70%"}}>
                  <form onSubmit={this.handleSubmit}>
                  <div className={"row"}>
                      <div className={"col-4"}>
                          <select value={this.state.colaborador} onChange={(e)=> this.setState({colaborador:e.target.value})} className="form-group">
                              <option selected>Colaborador</option>
                              {this.state.colaboradores.map(c => (
                                  <option value={c.id}>{c.nome}</option>
                              ))}
                          </select>
                      </div>

                      <div className={"col-4"}>
                         <select value={this.state.tipoFormacao} onChange={(e)=> this.setState({tipoFormacao:e.target.value})} className="form-group">
                             <option selected>Tipo de Formação</option>
                             {this.state.tiposFormacoes.map(t => (
                                 <option value={t.tipo}>{t.tipo}</option>
                             ))}
                         </select>
                      </div>

                      <div className={"col-4"}>
                          <span className="p-float-label">
                          <InputText  id="in" value={this.state.nomeCurso} onChange={(e) => this.setState({nomeCurso: e.target.value})} />
                          <label htmlFor="in">Nome do Curso</label>
                        </span>
                      </div>
                  </div>
                  <br/>
                  <div className={"row"}>
                      <div className={"col-4"}>
                          <span className="p-float-label">
                          <InputText  id="in2" value={this.state.instituicao} onChange={(e) => this.setState({instituicao: e.target.value})} />
                          <label htmlFor="in2">Instituição</label>
                        </span>
                      </div>

                      <div className={"col-4"}>
                          <span className="p-float-label">
                          <InputMask mask={"99-99-9999"} id="in3" tooltip={"Use este Formato : YYYY/MM/DD"} value={this.state.dataInicio} onChange={(e) => this.setState({dataInicio: e.target.value})} />
                          <label htmlFor="in3">Data de Início do curso</label>
                        </span>
                      </div>

                      <div className={"col-4"}>
                          <span className="p-float-label">
                          <InputMask mask={"99-99-9999"} id="in4" tooltip={"Use este Formato : YYYY/MM/DD"} value={this.state.dataFim} onChange={(e) => this.setState({dataFim: e.target.value})} />
                          <label htmlFor="in4">Data de Término do Curso</label>
                        </span>
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

export default NovaFormacao_Component;