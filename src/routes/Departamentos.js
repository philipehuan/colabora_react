import React,{Component} from "react";

import DepartamentoService from "../sevice/departamentoService";

import "../routes/App.css";
import Navbar_brand from "../components/navbar_brand";
import MenuBar from "../components/menuBar";

import Pagination from "../components/pagination";
import TableDepartamento from "../components/tableDepartamento";

class Departamentos extends Component{
    constructor() {
        super();
        this.state = {
            departamentos : [],
            currentPage : 1,
            postsPerPage : 5,
        };

        this.departamentoservice = new DepartamentoService();
    }



    componentDidMount() {
        this.departamentoservice.getDepartamento().then(data => this.setState({departamentos:data}))
    };

    render() {

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPost = this.state.departamentos.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = pageNumber =>this.setState({currentPage : pageNumber});

        return(
           <React.Fragment>
                <header>
                    <Navbar_brand />
                    <MenuBar />

                </header>
               <TableDepartamento posts={currentPost} />
                <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.departamentos.length} paginate={paginate} />
           </React.Fragment>
        )
    }
}

export default Departamentos;