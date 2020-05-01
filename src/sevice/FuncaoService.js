import axios from 'axios';

 class funcaoService{
     constructor() {
         this.state ={
             url : 'https://colaborate.herokuapp.com/colabora/coreapp/funcao',
         }
     }

    getFuncao(){
       return axios.get(this.state.url)
            .then(res => res.data)
    }

    Delete(id){
        return axios.delete(this.state.url+'/'+id)
            .then(res => res.data)
    }

    setFuncao(dat){
        return axios.post(this.state.url,dat)
            .then(res => res.data)
    }
 }
export default funcaoService;