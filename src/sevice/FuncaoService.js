import axios from 'axios';

 class funcaoService{

    getFuncao(){
       return axios.get('https://colaborate.herokuapp.com/colabora/coreapp/funcao/')
            .then(res => res.data)
    }

    Delete(id){
        return axios.delete('https://colaborate.herokuapp.com/colabora/coreapp/funcao/'+id)
            .then(res => res.data)
    }

    setFuncao(dat){
        return axios.post('https://colaborate.herokuapp.com/colabora/coreapp/funcao/',dat)
            .then(res => res.data)
    }
 }
export default funcaoService;