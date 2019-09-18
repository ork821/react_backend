import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import TodoPage from "./components/pages/TogoPage";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux/rootReducer";
import logger from 'redux-logger'


function App() {
    let store = createStore(rootReducer, applyMiddleware(logger))

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={TodoPage}/>
                </Switch>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
