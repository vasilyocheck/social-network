import React from 'react';
import s from "../Login.module.css";
import {useFormik} from "formik";
import {loginTC} from "../../../redux/reducers/auth-reducer";
import {validate} from "../login-utils";
import {useAppDispatch} from "../../../app/hooks";



export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(loginTC(values));
        },
        validate: (values) => validate(values),
    });

    return (
        <form action="" className={s.form} onSubmit={formik.handleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input id='email' {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email &&
                <div className={s.error}>{formik.errors.email}</div>}

            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' {...formik.getFieldProps('password')}/>
            {formik.touched.password && formik.errors.password &&
                <div className={s.error}>{formik.errors.password}</div>}
            <div>
                <label htmlFor='rememeberMe'>Remember me</label>
                <input type='checkbox'
                       id='rememberMe'
                       checked={formik.values.rememberMe}
                       {...formik.getFieldProps('rememberMe')}/>
            </div>
            <button className={s.submitBtn} type='submit'>Login</button>
        </form>
    );
};