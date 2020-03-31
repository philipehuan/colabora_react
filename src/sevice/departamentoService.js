import axios from 'axios';

 class DepartamentoService {
     getDepartamento(){
         return axios.get('https://colaborate.herokuapp.com/colabora/coreapp/departamento/')
             .then(res => res.data)

     }
}

export default DepartamentoService;