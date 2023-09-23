import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogues} from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='*' Component={Profile}/>
                        <Route path='/profile' Component={Profile}/>
                        <Route path='/dialogues' Component={Dialogues}/>
                        <Route path='/news' Component={News}/>
                        <Route path='/music' Component={Music}/>
                        <Route path='/settings' Component={Settings}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;