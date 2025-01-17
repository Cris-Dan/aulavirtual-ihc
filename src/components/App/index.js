import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home/HomePage';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import BuscarArchivos from '../BuscarArchivos';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import CursoPage from '../Curso/Autorizado';
import NoEncontrada from '../NoEncontrada';

const App = () => (
  <Router>
    <div className='w100'>
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.SEARCH} component={BuscarArchivos} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
        <Route exact path={ROUTES.CURSO} component={CursoPage} />
        <Route path="*" component={NoEncontrada} />
      </Switch>
    </div>
  </Router>
);

export default withAuthentication(App);
