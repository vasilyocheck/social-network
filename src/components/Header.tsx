import React from 'react';
import logo from "../assets/img/7.jpg";

export const Header = () => {
    return (
        <header className={'header'}>
            <img src={logo} alt={'logo'}/>
        </header>
    );
};