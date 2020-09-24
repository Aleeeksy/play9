import React from 'react';
import {render} from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import configureStore from "./redux/configureStore";
import {Provider as ReduxProvider} from "react-redux"

const store = configureStore();

render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ReduxProvider>,
    document.getElementById("app")
);

