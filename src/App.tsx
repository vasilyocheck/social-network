import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialoguesContainer} from "./components/Dialogues/DialoguesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {WithAuthRedirect} from "./hoc/withAuthRedirect";

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={WithAuthRedirect(ProfileContainer)}/>
                    <Route path='/profile/:userId' element={WithAuthRedirect(ProfileContainer)}/>
                    <Route path='/dialogues' element={WithAuthRedirect(DialoguesContainer)}/>
                    <Route path='/users' element={WithAuthRedirect(UsersContainer)}/>
                    <Route path='/news' element={WithAuthRedirect(News)}/>
                    <Route path='/music' element={WithAuthRedirect(Music)}/>
                    <Route path='/settings' element={WithAuthRedirect(Settings)}/>
                    <Route path={'/login'} element={<Login/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;