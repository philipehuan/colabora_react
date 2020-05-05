import axios from 'axios';

 class DepartamentoService {

     constructor() {
         this.state = {
             url : 'http://localhost:8000/colabora/coreapp/departamento',
         }
     }

     getDepartamento(){
         return axios.get(this.state.url)
             .then(res => res.data)

     }

     setDepartamento(dat){

         return axios.post(this.state.url,dat)
             .then(res=>res.data)
     }

     setDelete(id){
         return axios.delete( this.state.url+'/'+id)
             .then(res=>res.data)
     }
}

export default DepartamentoService;