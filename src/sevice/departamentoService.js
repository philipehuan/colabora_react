import axios from 'axios';

 class DepartamentoService {

     getDepartamento(){
         return axios.get('http://localhost:8000/colabora/coreapp/departamento/')
             .then(res => res.data)

     }

     setDepartamento(dat){

         return axios.post('http://localhost:8000/colabora/coreapp/departamento/',dat)
             .then(res=>res.data)
     }

     setDelete(id){
         return axios.delete('http://localhost:8000/colabora/coreapp/departamento/'+id)
             .then(res=>res.data)
     }
}

export default DepartamentoService;