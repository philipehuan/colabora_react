import  axios from "axios";

class colaboradorService {
    constructor() {
        this.state = {
            url : 'https://colaborate.herokuapp.com/colabora/coreapp/colaborador',
        }
    }

    getColaborador(){
        return axios.get(this.state.url)
            .then(res => res.data)
    }

    getDetailedColabroasor(id){
        return axios.get(this.state.url+'/'+id)
            .then(res => res.data)
    }

    setColaborador(dat){
        return axios.post(this.state.url,dat)
            .then(res=> res.data)
    }

    deleteColaborador(id){
        return axios.delete(this.state.url+'/'+id)
            .then(res => res.data)
    }
}
export default colaboradorService;