import {Dispatch} from 'redux'
import {RegisterAPI} from "../../../n1-main/m3-dal/instance";
import {Redirect} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


const initialState = {}
type InitialStateType = typeof initialState

export const registerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action) {
        case 'SOME_ACTION':

        default:
            return state
    }
}

export const RegisterTC = (data: RegisterParamsType) => () => {
    RegisterAPI.register(data).then(res => {
        if (res.data.resultCode === 0) {
            return <Redirect to={"/login"}/>
        } else {
            // обработка ошибки
            console.log("ошибка при регистрации")
        }
    }).catch((error)=>{
        // обработка ошибки
        console.log("catch - ошибка при регистрации")
    })

}
export type RegisterParamsType = {
    email: string
    password: string
    }

type ActionsType = {}

