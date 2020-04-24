import React, {useState} from "react";
import {Panel} from "primereact/panel";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";


const TableColaborador = ({posts,pagination}) => {
    const [dislplayDialog, setDisplayDialog] = useState('false');

    let plus_button = <div className="p-clearfix">
        //Todo Falta terminar esse dialog
        <Button icon="pi pi-search" className="p-button-secondary" onClick={setDisplayDialog('true')} />
        <Dialog header="Colaborador" visible={dislplayDialog} onHide={setDisplayDialog('false')} >
            {posts.map(c => (
                <p>{c.nome}</p>
            ))}
        </Dialog>
    </div>

   let footer = <span>
       <Button icon="pi pi-plus" className="p-button-primary" />
       <span style={{float:'right'}}>{pagination}</span>
   </span>
    return(
       <Card  footer={footer} style={{width:'70%',height:'50%', marginLeft:'15%', marginTop:'5px'}}>
            <table className="table table-striped">
                <thead>
                  <th scope="col">Colaborador</th>
                  <th scope="col">Função</th>
                  <th scope="col">Departamento</th>
                  <th scope="col"></th>
                </thead>
                <tbody>
                {posts.map(p => (
                    <tr key={p.id}>
                        <td>{p.nome}</td>
                        <td>{p.nome_funcao}</td>
                        <td>{p.nome_departamento}</td>
                        <td>{plus_button} </td>
                    </tr>
                    ))}
                    </tbody>
            </table>
       </Card>
    )
}

export default TableColaborador;