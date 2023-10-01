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
import {DialogueItemPropsType} from "./components/Dialogues/DialogueItem/DialogueItem";
import {PostsDataType} from "./components/Profile/MyPosts/MyPosts";
import {MessagePropsType} from "./index";

export type ProfilePagePropsType = {
    posts: PostsDataType[]
}

export type DialoguesPagePropsType = {
    dialogues: DialogueItemPropsType[]
    messages: MessagePropsType[]

}

export type FriendItemPropsType = {
    id: number
    name: string
    pic: string
}

export type SidebarPropsType = {
    friends: FriendItemPropsType[]
}

export type AppPagesPropsType = {
    profilePage: ProfilePagePropsType
    dialoguesPage: DialoguesPagePropsType
    sidebar: SidebarPropsType
}

export type AppPropsType = {
    state: AppPagesPropsType
    addPost: (newPost: string) => void
}

const App: React.FC<AppPropsType> = ({state, addPost}) => {
    const ProfileComponent = <Profile state={state.profilePage} addPost={addPost} />
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