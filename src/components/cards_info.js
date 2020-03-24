import React,{Component} from "react";
import {Card} from "primereact/card";


class Cards_info extends Component{
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Card title="Colaboradores" style={{width:"360px"}}>
                            <span style={{fontSize:'3em'}}>0</span>
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