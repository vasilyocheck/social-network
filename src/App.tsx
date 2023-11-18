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


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='*'
                           element={<ProfileContainer />}/>
                    <Route path='/profile/:userId'
                           element={<ProfileContainer />}/>
                    <Route path='/dialogues'
                           element={
                               <DialoguesContainer />
                    }
                    />
                    <Route path='/users'
                           element={<UsersContainer />} />
                    <Route path='/news'
                           element={<News/>}/>
                    <Route path='/music'
                           element={<Music/>}/>
                    <Route path='/settings'
                           element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;