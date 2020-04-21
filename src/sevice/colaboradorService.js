import  axios from "axios";

class colaboradorService {
    getColaboradorInfo(){
        return axios.get('http://localhost:8000/colabora/coreapp/set_colaborador_get_info/')
            .then(res => res.data)
    }
}
export default colaboradorService;