import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {Header} from "./n1-main/m1-ui/header/Header";
import {Routes} from "./n1-main/m1-ui/routes/Routes";
import {store} from "./n1-main/m2-bll/store";

function App() {
    return (
        <div>
            <Provider store={store}>
                <HashRouter>

                    <Header/>

                    <Routes/>

                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;
