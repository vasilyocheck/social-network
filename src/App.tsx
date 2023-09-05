import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogues} from "./components/Dialogues/Dialogues";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <NavBar />
            <div className='app-wrapper-content'>
                {/*<Profile />*/}
                <Dialogues />
            </div>

        </div>
    );
}

export default App;