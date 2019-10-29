/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Principal from './Principal';


function Root(props) {
    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path='/principal' render={(props) => { return true ? (<Principal {...props} cursos="uwu" />) : (<Redirect to="/" />) }} />
                </Switch>
            </App>
        </Router>
    );
};

export default Root;