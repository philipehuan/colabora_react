import  axios from "axios";

class colaboradorService {
    getColaborador(){
        return axios.get('http://localhost:8000/colabora/coreapp/colaborador/')
            .then(res => res.data)
    }

    getDetailedColabroasor(id){
        return axios.get('https://colaborate.herokuapp.com/colabora/coreapp/colaborador/'+id)
            .then(res => res.data)
    }

    setColaborador(dat){
        return axios.post('https://colaborate.herokuapp.com/colabora/coreapp/colaborador/',dat)
            .then(res=> res.data)
    }

    deleteColaborador(id){
        return axios.delete('https://colaborate.herokuapp.com/colabora/coreapp/colaborador/'+id)
            .then(res => res.data)
    }
}
export default colaboradorService;