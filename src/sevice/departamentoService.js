import axios from 'axios';

 class DepartamentoService {

     getDepartamento(){
         return axios.get('https://colaborate.herokuapp.com/colabora/coreapp/departamento/')
             .then(res => res.data)

     }

     setDepartamento(dat){

         return axios.post('https://colaborate.herokuapp.com/colabora/coreapp/departamento/',dat)
             .then(res=>res.data)
     }

     setDelete(id){
         return axios.delete('https://colaborate.herokuapp.com/colabora/coreapp/departamento/'+id)
             .then(res=>res.data)
     }
}

export default DepartamentoService;