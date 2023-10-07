import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, StateType, updateNewPostText} from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export let rerenderEntireTree = (state: StateType) => {

    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
    );
}