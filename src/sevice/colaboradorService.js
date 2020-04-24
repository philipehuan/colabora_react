import  axios from "axios";

class colaboradorService {
    getColaborador(){
        return axios.get('http://localhost:8000/colabora/coreapp/colaborador/')
            .then(res => res.data)
    }

    setColaborador(dat){
        return axios.post('http://localhost:8000/colabora/coreapp/colaborador/',dat)
            .then(res=> res.data)
    }

    deleteColaborador(id){
        return axios.delete('http://localhost:8000/colabora/coreapp/colaborador/'+id)
            .then(res => res.data)
    }
}
export default colaboradorService;