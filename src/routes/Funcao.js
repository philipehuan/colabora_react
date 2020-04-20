import React, {Component} from "react";
import Navbar_brand from "../components/navbar_brand";
import MenuBar from "../components/menuBar";
import funcaoService from '../sevice/FuncaoService';
import Pagination from "../components/pagination";
import TableFuncao from "../components/TableFuncao";
import DepartamentoService from "../sevice/departamentoService";

class Funcao extends Component{
    constructor() {
        super();
        this.state={
            funcoes : [],
            departamentos : [],
            currentPage : 1,
            postsPerPage : 5,
        }
        this.funcaoservice = new funcaoService();
        this.departamentoService = new DepartamentoService();
    }

    componentDidMount() {
        this.funcaoservice.getFuncao().then(data => this.setState({funcoes:data}));
        this.departamentoService.getDepartamento().then(data => this.setState({departamentos : data}))
    }

    render() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPost = this.state.funcoes.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = pageNumber =>this.setState({currentPage : pageNumber});
        return(
            <React.Fragment>
                <header>
                <Navbar_brand />
                <MenuBar />
                </header>

                <TableFuncao posts={currentPost}  departamentos={this.state.departamentos}/>
                <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.funcoes.length} paginate={paginate} />
            </React.Fragment>
        )
    }
}

export default Funcao;