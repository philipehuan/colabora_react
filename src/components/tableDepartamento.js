import React, {useState} from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import DepartamentoService from "../sevice/departamentoService";

const TableDepartamento= ({posts}) =>{

    const [displayDialog, setDisplayDialog] = useState(false);
    const [nomedepartamento, setNomeDepartamento] = useState('');

    let departamentoservice = new DepartamentoService();

    function handleSubmit (event) {
        event.preventDefault();

        departamentoservice.setDepartamento({nomedepartamento:nomedepartamento})
            .then(window.location.reload(true))
    }

    function handleChange (event) {
        setNomeDepartamento(event.target.value);
        console.log(nomedepartamento);
    }

    function onClick(){
        setDisplayDialog(true);
    }

    function onHide (){
       setDisplayDialog(false);
    }

    function onDelete(id){
        departamentoservice.setDelete(id)
            .then(window.location.reload(true))
    }

    function renderFooter (name) {
        return (
            <div>
                <Button label="Save" icon="pi pi-save" type="submit" />
                <Button label="No" icon="pi pi-times" onClick={() => onHide()} className="p-button-secondary"/>
            </div>
        );
    }

    let footer = <div className="p-clearfix" style={{width:'10%'}}>
        <Button label="Add" icon="pi pi-plus" onClick={() => onClick()} className={"p-button-info"} />
        <form onSubmit={handleSubmit}>
            <Dialog header="Novo Departamento" visible={displayDialog} style={{width: '50vw'}} onHide={() => onHide()} modal={false}
                    footer={renderFooter('displayDialog')}>

                <label htmlFor="nome_departamento">Departamento</label>
                <InputText id="nome_departamento" type="text" size="30" value={nomedepartamento} onChange={handleChange} />
            </Dialog>
        </form>
    </div>;

    return(
        <table className="table table-striped">
            <thead>
               <th scope="col">Departamento</th>
               <th scope="col"></th>
            </thead>
            <tbody>
            {posts.map(dep =>(
                <tr key={dep.id}>
                    <td>{dep.nomedepartamento}</td>
                    <td><button className="btn btn-danger" onClick={() => onDelete(dep.id)}><i className="pi pi-trash"></i></button></td>
                </tr>
            ))}
            </tbody>
            <tfoot>{footer}</tfoot>
        </table>
    );
}

export default TableDepartamento;