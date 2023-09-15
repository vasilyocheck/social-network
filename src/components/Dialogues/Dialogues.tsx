import React from 'react';
import s from './Dialogues.module.css'

export const Dialogues = () => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <div className={s.dialogue + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialogue}>
                    Andrey
                </div>
                <div className={s.dialogue}>
                    Sveta
                </div>
                <div className={s.dialogue}>
                    Sasha
                </div>
                <div className={s.dialogue}>
                    Victor
                </div>
                <div className={s.dialogue}>
                    Igor
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