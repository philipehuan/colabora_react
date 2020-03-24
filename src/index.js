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

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
           <Route path="/" exact component={App}/>
           <Route path="/Novo_Colaborador" exact component={NovoColaborador} />
           <Route path="/Lista_Colaboradores" exact component={ListaColaborador} />
           <Route path="/Nova_Formacao" exact component={NovaFormacao}/>
           <Route path="/Departamentos" exact component={Departamentos} />
        </React.Fragment>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
