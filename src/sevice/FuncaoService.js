import axios from 'axios';

 class funcaoService{

    getFuncao(){
       return axios.get('http://127.0.0.1:8000/colabora/coreapp/funcao/')
            .then(res => res.data)
    }

    Delete(id){
        return axios.delete('http://127.0.0.1:8000/colabora/coreapp/funcao/'+id)
            .then(res => res.data)
    }

    setFuncao(dat){
        return axios.post('http://127.0.0.1:8000/colabora/coreapp/funcao/',dat)
            .then(res => res.data)
    }
 }
export default funcaoService;