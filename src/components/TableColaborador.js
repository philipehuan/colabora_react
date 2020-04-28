import React, {useState} from "react";
import {Panel} from "primereact/panel";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import NovoColaboradorComponent from "./Novo_colaboradorComponent";
import colaboradorService from "../sevice/colaboradorService";
import {InputText} from "primereact/inputtext";


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


    let DetailContent = <Card>
        {detail.map(d => (
            <div>
                <div className="row">
                    <div className="col-4">
                        <label>Nome</label>  <InputText readOnly={true} value={d.nome}/>
                    </div>
                    <div className="col-4">
                        <label>Nascimento</label>  <InputText readOnly={true} value={d.nascimento}/>
                    </div>
                    <div className="col-4">
                        <label>Sexo</label>  <InputText readOnly={true} value={d.sexo}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label>RG</label>  <InputText readOnly={true} value={d.rg}/>
                    </div>
                    <div className="col-4">
                        <label>CPF</label>  <InputText readOnly={true} value={d.cpf}/>
                    </div>
                    <div className="col-4">
                        <label>Telefone</label>  <InputText readOnly={true} value={d.telefone}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label>CNH Categoria</label>  <InputText readOnly={true} value={d.cnh_tipo}/>
                    </div>
                    //Todo Terminar isso daqui
                    {d.cnh_tipo ?
                        (<div className="col-4">
                            <label>CNH</label>  <InputText readOnly={true} value={d.cnh}/>
                        </div>) : null}
                    <div className="col-4">
                        <label htmlFor="departamento">Departamento</label> <InputText id="departamento" readOnly={true} value={d.nome_departamento}></InputText>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Função</label><input readOnly={true} value={d.nome_funcao}/>
                    </div>
                </div>
            </div>
        ))}
    </Card>


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
                         <Dialog onHide={() => onHide2()} visible={displayDialog2} maximizable style={{width:'70%'}}>
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