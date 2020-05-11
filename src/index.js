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
import Departamentos from "./routes/Departamentos";
import Funcao from "./routes/Funcao";
import FormacaoColaborador from "./routes/Formacao";
import lista_Formacao from "./routes/Lista_Formacao";
import Login from "./routes/Login";

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route path="/" exact component={Login} />
           <Route path="/home" exact component={App}/>
           <Route path="/novo_colaborador" component={NovoColaborador} />
           <Route path="/Lista_Colaboradores" component={ListaColaborador} />
           <Route path="/departamentos" component={Departamentos} />
           <Route path="/funcao" component={Funcao} />
           <Route path="/formacao_colaborador" component={FormacaoColaborador} />
           <Route path="/lista_formacao" component={lista_Formacao} />
        </React.Fragment>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
