import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home';
import About from './About';
function Root(props) {
    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/about' component={About} />
                </Switch>
            </App>
        </Router>
    );
};

export default Root;