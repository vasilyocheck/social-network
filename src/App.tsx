import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialoguesContainer} from "./components/Dialogues/DialoguesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='*'
                           element={<Profile />}/>
                    <Route path='/profile'
                           element={<Profile />}/>
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