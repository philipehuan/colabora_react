import axios from 'axios';

class formacaoService {
    constructor() {
        this.state={
            url : 'http://127.0.0.1:8000/colabora/coreapp/formacao',
        }
    }

    getFormacao(){
        return axios.get(this.state.url)
            .then(res => res.data)
    }

    setFormacao(dat){
        return axios.post(this.state.url, dat)
            .then(res => res.data)
    }

    deleteFormacao(id){
        return axios.delete(this.state.url+'/'+id)
            .then(res => res.data)
    }
}

export default formacaoService;