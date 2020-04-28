import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import NovoColaborador from "./routes/NovoColaborador";
import ListaColaborador from "./routes/ListaColaborador";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter , Route } from "react-router-dom";

import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import NovaFormacao from "./routes/NovaFormacao";
import Departamentos from "./routes/Departamentos";
import Funcao from "./routes/Funcao";

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
           <Route path="/" exact component={App}/>
           <Route path="/Novo_Colaborador" component={NovoColaborador} />
           <Route path="/Lista_Colaboradores" component={ListaColaborador} />
           <Route path="/Nova_Formacao" component={NovaFormacao}/>
           <Route path="/Departamentos" component={Departamentos} />
           <Route path="/Funcao" component={Funcao} />
        </React.Fragment>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
