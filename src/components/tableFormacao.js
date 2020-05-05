import React, {useState} from "react";
import formacaoService from "../sevice/formacaoService";
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import FormacaoColaborador from "../routes/Formacao";
import NovaFormacao_Component from "./NovaFormacao_Component";

const TableFormacao = ({posts, pagination}) => {
   const [displayDialog , setDisplayDialog] = useState(false);


   let formacaoservice = new formacaoService();

   function onDelete(id) {
      formacaoservice.deleteFormacao(id).then(window.location.reload(true))
   }

   function onClick(){
      setDisplayDialog(true);
   }

   function onHide (){
      setDisplayDialog(false);
   }



   let dialogAdd =  <div className="p-clearfix" style={{width:'10%'}}>
      <Button icon="pi pi-plus" onClick={() => onClick()} className={"p-button-primary"} tooltip="Nova formação" />
         <Dialog header="Nova Formação" visible={displayDialog} style={{width: '50vw'}} onHide={() => onHide()} modal={false} maximizable>

            <NovaFormacao_Component />
         </Dialog>
   </div>;

   let bar = <div>
      <span>{dialogAdd}</span>
      <span style={{float:'right'}}>{pagination}</span>
   </div>

   return(
       <Card title={bar}  style={{width:'80%', marginLeft:'10%', marginTop:'20px'}}>
          <table className="table table-striped">
               <thead>
                  <th scope="col">Formação</th>
                  <th scope="col">Colaborador</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Instituição</th>
                  <th scope="col">Data Início</th>
                  <th scope="col">Data Fim</th>
                  <th scope="col"></th>
               </thead>
              <tbody>
              {posts.map( p => (
                  <tr key={p.id}>
                     <td>{p.nome_curso}</td>
                     <td>{p.nome_colaborador}</td>
                     <td>{p.tipo_formacao}</td>
                     <td>{p.instituicao}</td>
                     <td>{p.dt_inicio}</td>
                     <td>{p.dt_fim}</td>
                     <td><Button icon="pi pi-trash" className="p-button-danger" tooltip="Deletar" onClick={() => onDelete(p.id)} /> </td>
                  </tr>
              ))}
              </tbody>
          </table>
       </Card>
   )
}

export default TableFormacao;
