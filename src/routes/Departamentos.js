import React,{Component} from "react";

import DepartamentoService from "../sevice/departamentoService";

import "../routes/App.css";
import Navbar_brand from "../components/navbar_brand";
import MenuBar from "../components/menuBar";
import ModalComponent from "../components/modalComponent";
import axios from 'axios';
import {Fieldset} from "primereact/fieldset";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";

class Departamentos extends Component{
    constructor() {
        super();
        this.state = {
            departamentos : [],
            nomedepartamento : '',
            displayDialog : false,
            position : 'center',
        };

        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        this.departamentoservice = new DepartamentoService();
        this.handleChange = this.handleChange.bind(this)
    }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    onClick(name, position){
        let state = {
            [`${name}`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        this.setState(state);
    }

    onHide(name){
        this.setState({
            [`${name}`]: false
        });
    }


    handleChange = event =>{
        this.setState({nomedepartamento: event.target.value});
        console.log(this.state.nomedepartamento);

    };

    refreshPage(props){
        window.location.reload(this.props);
    }
    handleSubmit = event => {
      event.preventDefault();


      axios.post('https://colaborate.herokuapp.com/colabora/coreapp/departamento/', {nomedepartamento : this.state.nomedepartamento})
          .then(res => {
              console.log(res);
              console.log(res.data);
              this.refreshPage(true);
          })
    };

    componentDidMount() {
        this.departamentoservice.getDepartamento().then(data => this.setState({departamentos:data}))
    };

    renderFooter(name) {
        return (
            <div>
                <Button label="Save" icon="pi pi-save" type="submit" />
                <Button label="No" icon="pi pi-times" onClick={() => this.onHide(name)} className="p-button-secondary"/>
            </div>
        );
    }



    render() {
        let footer = <div className="p-clearfix" style={{width:'10%'}}>
            <Button label="Add" icon="pi pi-plus" onClick={() => this.onClick('displayModal')} className={"p-button-info"} />
            <form onSubmit={this.handleSubmit}>
                 <Dialog header="Novo Departamento" visible={this.state.displayModal} style={{width: '50vw'}} onHide={() => this.onHide('displayModal')} modal={false}
                    footer={this.renderFooter('displayModal')}>

                     <label htmlFor="nome_departamento">Departamento</label>
                     <InputText id="nome_departamento" type="text" size="30" value={this.state.nomedepartamento} onChange={this.handleChange} />
                 </Dialog>
            </form>
        </div>;


        return(
           <React.Fragment>
                <header>
                    <Navbar_brand />
                    <MenuBar />

                </header>
                <DataTable value={this.state.departamentos} header={"Departamento" } paginator={true} rows={10} footer={footer}
                           style={{width:'50%',marginLeft:'25%', marginTop:'5%'}}>
                    <Column field="nomedepartamento"  />
                    <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}} />
                </DataTable>

           </React.Fragment>
        )
    }
}

export default Departamentos;