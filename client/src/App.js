import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import TodoPage from "./components/pages/TogoPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={TodoPage}/>
            </Switch>
        </BrowserRouter>

    );
}

export default App;
