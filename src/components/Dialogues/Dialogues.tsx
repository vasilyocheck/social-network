import React from 'react';
import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";

export const Dialogues = () => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <div className={s.dialogue + ' ' + s.active}>
                    <NavLink to='/dialogues/1'>Dimych</NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to='/dialogues/2'>Andrey</NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to='/dialogues/3'>Sveta</NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to='/dialogues/4'>Sasha</NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to='/dialogues/4'>Victor</NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to='/dialogues/6'>Igor</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>What about your IT-Kamasutra?</div>
                <div className={s.message}>Yoh!</div>
            </div>
        </div>
    );
};