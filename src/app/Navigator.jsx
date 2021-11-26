import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";


import Login from "../pages/login/Login";


import {
    INICIO,
    LOGIN,
  } from "./Routes";


const history = createBrowserHistory();

const Navigator = () =>{
    return (
        <Router history={history}>
            <Switch>
                <Route path={LOGIN} componet={Login}/>
            </Switch>
        </Router>
    );
}

export default Navigator;