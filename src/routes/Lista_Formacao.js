import React, {Component} from "react";
import Navbar_brand from "../components/navbar_brand";
import {MenuBar} from "../components/menuBar";
import formacaoService from "../sevice/formacaoService";
import Pagination from "../components/pagination";
import TableFormacao from "../components/tableFormacao";

class lista_Formacao extends Component{
    constructor() {
        super();

        this.state ={
            formacoes : [],
            currentPage : 1,
            postsPerPage : 5,
        }

        this.formacaoservice = new formacaoService();
    }

    componentDidMount() {
        this.formacaoservice.getFormacao().then(data => this.setState({formacoes : data}))
    }

    render() {

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPost = this.state.formacoes.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = pageNumber =>this.setState({currentPage : pageNumber});
        const pagination = <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.formacoes.length} paginate={paginate} />;


        return(
            <React.Fragment>
                <Navbar_brand />
                <MenuBar/>
                <TableFormacao posts={currentPost} pagination={pagination} />
            </React.Fragment>
        )
    }
}
export default lista_Formacao;