import React from 'react'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../n1-main/m2-bll/store";
import {Redirect} from "react-router-dom";


export const Home = () => {
    const isLoggedIn  = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    if(!isLoggedIn){
        return <Redirect to={"/login"}/>
    }
    return (
        <div className="App">
            Home
        </div>
    )
}