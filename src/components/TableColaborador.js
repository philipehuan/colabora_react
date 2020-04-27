import React, {useState} from "react";
import {Panel} from "primereact/panel";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import NovoColaboradorComponent from "./Novo_colaboradorComponent";
import colaboradorService from "../sevice/colaboradorService";


const TableColaborador = ({posts,pagination}) => {
    const [displayDialog, setDisplayDialog] = useState(false);
    const [displayDialog2, setDisplayDialog2] = useState(false);

    const [detail, setDetail] = useState([]);
    const colaboradorSevice = new colaboradorService();
    
    function Detail(id) {
        colaboradorSevice.getDetailedColabroasor(id).then(data => setDetail([data]));
        setDisplayDialog2(true);
    }

    function onShow (){
        setDisplayDialog(true)
    }

    function onHide (){
        setDisplayDialog(false);
    }
    function onHide2 (){
        setDisplayDialog2(false);
    }

     let plus_button = <div className="p-clearfix">
         <Dialog  visible={displayDialog} onHide={()=> onHide()}  style={{width:'80%'}}>
            <NovoColaboradorComponent />
         </Dialog>
     </div>


    let DetailContent = <div>
        {detail.map(d => (
            <div>
                <span>{d.nome}</span>
                <span>{d.nascimento}</span>
                <span>{d.sexo}</span>
                <span>{d.rg}</span>
                <span>{d.cpf}</span>
                <span>{d.telefone}</span>
                <span>{d.cnh_tipo}</span>
                <span>{d.cnh}</span>
                <span>{d.nome_departamento}</span>
                <span>{d.nome_funcao}</span>
            </div>
        ))}
    </div>


   let footer = <span>
       <Button icon="pi pi-plus" className="p-button-primary" onClick={()=> onShow()} />
       <div className="p-clearfix">
         <Dialog  visible={displayDialog} onHide={()=> onHide()}  style={{width:'80%'}}>
            <NovoColaboradorComponent />
         </Dialog>
     </div>
   </span>
    return(
       <Card  title={footer} footer={pagination} style={{width:'70%',height:'50%', marginLeft:'15%', marginTop:'5px'}}>
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
                        <td style={{fontWeight:'600', color:'#414a41'}}>{p.nome}</td>
                        <td style={{fontWeight:'600', color:'#414a41'}}>{p.nome_funcao}</td>
                        <td style={{fontWeight:'600', color:'#414a41'}}>{p.nome_departamento}</td>
                        <td><Button icon="pi pi-search" className="p-button-warning"  tooltip="Detalhes" onClick={() => Detail(p.id)}/>
                         <Dialog onHide={() => onHide2()} visible={displayDialog2} >
                             <p>{DetailContent}</p>
                         </Dialog>
                        </td>
                    </tr>
                    ))}
                    </tbody>
            </table>
       </Card>
    )
}

export default TableColaborador;