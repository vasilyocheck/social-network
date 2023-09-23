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
import {DialogueItemPropsType} from "./components/Dialogues/DialogueItem/DialogueItem";
import {PostsDataType} from "./components/Profile/MyPosts/MyPosts";
import {MessagePropsType} from "./index";

export type AppPropsType = {
    dialogues: DialogueItemPropsType[]
    messages: MessagePropsType[]
    posts: PostsDataType[]
}

const App: React.FC<AppPropsType> = ({dialogues, messages, posts}) => {
    const ProfileComponent = <Profile posts={posts} />
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='*'
                               element={ProfileComponent}/>
                        <Route path='/profile'
                               element={ProfileComponent}/>
                        <Route path='/dialogues'
                               element={<Dialogues dialogues={dialogues}
                                                   messages={messages}
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
        </BrowserRouter>
    );
}

export default App;