import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider, useSelector} from 'react-redux';
import {Header} from "./n1-main/m1-ui/header/Header";
import {Routes} from "./n1-main/m1-ui/routes/Routes";
import {AppRootStateType, store} from "./n1-main/m2-bll/store";
import Preloader from "./n1-main/m1-ui/common/Preloder/Preloader";
import {RequestStatusType} from "./n1-main/m2-bll/app-reduser";
import {ErrorSnackBar} from "./n1-main/m1-ui/common/ErrorSnackBar/ErrorSnackBar";



function App() {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const error = useSelector<AppRootStateType,string | null >(state => state.app.error)


    return (
        <div>

                <HashRouter>

                <Header/>

                {status === 'loading' && <Preloader/>}
                <Routes/>
                    {error && <ErrorSnackBar errorMessage={error}/>}
            </HashRouter>

        </div>
    );
}

export default App;
