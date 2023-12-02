import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/' className={({ isActive }) => isActive ? s.active : ''}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogues' className={({ isActive }) => isActive ? s.active : ''}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/users' className={({ isActive }) => isActive ? s.active : ''}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({ isActive }) => isActive ? s.active : ''}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={({ isActive }) => isActive ? s.active : ''}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={({ isActive }) => isActive ? s.active : ''}>Settings</NavLink>
            </div>
            <Friends />
        </nav>

    );
};