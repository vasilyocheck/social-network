import React from 'react';

export const Profile = () => {
    return (
        <div className={'content'}>
            <div>
                <img
                    src={'https://t3.ftcdn.net/jpg/01/62/85/00/360_F_162850009_lnHxshkJUH36xjM3Ysi8gwAYwUBOaRWB.jpg'}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
};