import React, {FC} from 'react';
import logo from "../../assets/img/7.jpg";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    isAuth: boolean
}
export const Header: FC<HeaderPropsType> = ({login, isAuth}) => {
    return (
        <header className={s.header}>
            <img src={logo} alt={'logo'}/>
            <div className={s.loginBlock}>
                {isAuth
                    ?<div>{login}</div>
                    :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};