import React, {useState} from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import funcaoService from "../sevice/FuncaoService";
import '../routes/App.css';
import DropDown from "./DropDownComponent";
import {Card} from "primereact/card";

const TableFuncao= ({posts, departamentos, pagination}) =>{

    const [displayDialog, setDisplayDialog] = useState(false);
    const [nomefuncao, setNomeFuncao] = useState('');
    const [departamento, setDepartamento] = useState();

    let funcaoservice = new funcaoService();

    function handleSubmit (event) {
         event.preventDefault();

         funcaoservice.setFuncao({nomefuncao:nomefuncao, departamento:departamento})
             // .then(data => console.log(data))
             .then(window.location.reload(true))
    }

    function handleChange (event) {
        setNomeFuncao(event.target.value);
        console.log(nomefuncao, departamento);
    }

    function onClick(){
        setDisplayDialog(true);
    }

    function onHide (){
        setDisplayDialog(false);
    }

    function onDelete(id){
        funcaoservice.Delete(id)
            // .then(data => console.log(data))
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

                <label htmlFor="nome_funcao">Funcao</label>
                <InputText id="nome_funcao" type="text" size="30" value={nomefuncao} onChange={handleChange} />
                <select  className="select-custom" onChange={(e) => setDepartamento(e.target.value)}>
                    <option selected>Departamento</option>
                    {departamentos.map(p => (
                        <option value={p.id}>{p.nomedepartamento}</option>
                    ))}
                </select>
            </Dialog>
        </form>
    </div>;

    let foot = <span>
        <span>{footer}</span>
        <span style={{float:'right'}}>{pagination}</span>
    </span>

    return(
       <Card title={foot} style={{width:'70%',height:'50%', marginLeft:'15%', marginTop:'5px'}}>
        <table className="table table-striped">
            <thead>
            <th scope="col">Função</th>
            <th scope="col">Departamento</th>
            <th scope="col"></th>
            </thead>
            <tbody>
            {posts.map(dep =>(
                <tr key={dep.id}>
                    <td>{dep.nomefuncao}</td>
                    <td>{dep.nomedepartamento}</td>
                    <td><Button className="p-button-danger" icon="pi pi-trash" tooltip="Excluir" tooltipOptions={{position:'left'}} onClick={() => onDelete(dep.id)} />
                     <Button className="p-button-primary" icon="pi pi-pencil" tooltip="Editar" style={{marginLeft:'10px'}}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
       </Card>
    );
}

export default TableFuncao;