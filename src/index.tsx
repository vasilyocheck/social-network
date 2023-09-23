import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DialogueItemPropsType} from "./components/Dialogues/DialogueItem/DialogueItem";
import {PostsDataType} from "./components/Profile/MyPosts/MyPosts";

export type MessagePropsType = {
    id: number
    message: string
}

const dialogues:DialogueItemPropsType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Igor'}
];
const messages: MessagePropsType[] = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'What about your IT-Kamasutra?'},
    {id: 3, message: 'Yoh!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yohhhh!'}
];

const posts:PostsDataType[] = [
    {id: 1, postText: 'Post 1 message goes here', likesCount: 15},
    {id: 2, postText: `It's a lorem ipsum message for post`, likesCount: 23},

];


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App dialogues={dialogues} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
