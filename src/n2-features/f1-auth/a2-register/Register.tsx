import React from 'react'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {RegisterTC} from "./register-reducer";


export const Register = () => {
    const dispatch = useDispatch()
    type FormikErrorType = {
        email?: string
        password?: string
    }
    const formik = useFormik({
        initialValues: {
            email: 'potapov.eo@yandex.ru',
            password: 'jekajeka',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'email Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'password Required';
            } else if (values.password.length < 7) {
                errors.password = 'Invalid email address';
            }
            return errors;
        },


        onSubmit: values => {
            console.log(values)
            dispatch(RegisterTC(values))

            formik.resetForm()
        },
    })

    /* if (isLoggedIn) {

         return <Redirect to={"/"}/>
     }*/


    return <div>

        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    placeholder={"email"}
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                                 /> E-mail

                {formik.touched.email && formik.errors.email ?
                    <div style={{color: "red"}}>{formik.errors.email}</div> : null}
            </div>
            <div>
                <input
                    placeholder={"password"}
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}

                /> Password
                {formik.touched.password && formik.errors.password ?
                    <div style={{color: "red"}}>{formik.errors.password}</div> : null}
            </div>
            <button type="submit">Login</button>

        </form>

    </div>
}