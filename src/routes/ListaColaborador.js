import React,{Component} from "react";
import Navbar_brand from "../components/navbar_brand";
import MenuBar from "../components/menuBar";
import colaboradorService from "../sevice/colaboradorService";
import Pagination from "../components/pagination";
import TableColaborador from "../components/TableColaborador";

class ListaColaborador extends Component{
    constructor() {
        super();
        this.state={
              colaboradores : [],
              currentPage : 1,
              postsPerPage:3
        }
        this.colaboradorService = new colaboradorService();
    }

    componentDidMount() {
        this.colaboradorService.getColaborador().then(data => this.setState({colaboradores:data}))
    }


    render() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPost = this.state.colaboradores.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = pageNumber =>this.setState({currentPage : pageNumber});
        const pagination = <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.colaboradores.length} paginate={paginate} />
        return(
            <React.Fragment>
                <header>
                    <Navbar_brand/>
                    <MenuBar />
                </header>
                <TableColaborador posts={currentPost} pagination={pagination}/>
            </React.Fragment>
        )
    }
}

export default ListaColaborador;