import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogues} from "./components/Dialogues/Dialogues";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {GeneralActionType, StoreType} from "./redux/state";


type AppPropsType = {
    state: StoreType
    dispatch: (action: GeneralActionType) => void

}

const App: React.FC<AppPropsType> = ({state, dispatch}) => {
    const ProfileComponent = <Profile profilePage={state.profilePage} dispatch={dispatch} />
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar state={state.sidebar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='*'
                           element={ProfileComponent}/>
                    <Route path='/profile'
                           element={ProfileComponent}/>
                    <Route path='/dialogues'
                           element={<Dialogues state={state.dialoguesPage}
                                               dispatch={dispatch}
                           />}/>
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