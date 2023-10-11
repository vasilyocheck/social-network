import './index.css';
import reportWebVitals from './reportWebVitals';
import {store, StoreType} from "./redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export let rerenderEntireTree = (state: StoreType) => {
    root.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
