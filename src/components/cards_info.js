import React,{Component} from "react";
import {Card} from "primereact/card";
import colaboradorService from "../sevice/colaboradorService";
import formacaoService from "../sevice/formacaoService";


class Cards_info extends Component{
    constructor() {
        super();
        this.state = {
            colaboradores : [],
        }
        this.colaboradorservice = new colaboradorService();
        this.formacaoservice = new formacaoService();
    }

    componentDidMount() {
        this.colaboradorservice.getColaborador().then(data => this.setState({colaboradores : data}))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Card title="Colaboradores" style={{width:"360px"}}>
                            <span style={{fontSize:'3em'}}>{this.state.colaboradores.length}</span>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card title="Colaboradores em Férias" style={{width:"360px"}}>
                              <span style={{fontSize:'3em'}}>0</span>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card title="Horas Extras Não Faturadas" style={{width:'360px'}} >
                            <span style={{fontSize:'3em'}}>0</span>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards_info;