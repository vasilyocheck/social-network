import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {store, StoreType} from "./redux/redux-store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export let rerenderEntireTree = (state: StoreType) => {
    root.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={state}
            />
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
