import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/MTApp.css'
import Login from './components/Login'
import RecoverPassword from './components/RecoverPassword'
import StartApp from './components/StartApp'
import Main  from './components/Main'
import ContactUs  from './components/ContactUs'
import Module from './components/Module';
import TechnicalColleges from './components/TechnicalColleges';
import TechnicalSupport from './components/TechnicalSupport';
import Help from './components/Help';
import ProfileData from './components/user/ProfileData';
import StudentApp from './components/student/StudentApp';

export default class App extends Component { 
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className = "App wrapper">
          <Switch>
            <Route path='/' exact render={(props) => { return <Redirect {...props} to="/iniciar-sesion" /> }} />
            <Route path='/iniciar-sesion' exact render={(props) => <Login {...props} App = {this}/>} />
            <Route path='/recuperar-contrasena' exact render={(props) => <RecoverPassword {...props}/>} />
            <Route path='/inicio' exact render={(props) => <Main {...props} App = {this} contetent = {StartApp}/>} />
            <Route path='/contactanos' exact render={(props) => <Main {...props} App = {this} contetent = {ContactUs}/>} />
            <Route path='/modulos' exact render={(props) => <Main {...props} App = {this} contetent = {Module}/>} />
            <Route path='/colegios' exact render={(props) => <Main {...props} App = {this} contetent = {TechnicalColleges}/>} />
            <Route path='/soporte-tecnico' exact render={(props) => <Main {...props} App = {this} contetent = {TechnicalSupport}/>} />
            <Route path='/ayuda' exact render={(props) => <Main {...props} App = {this} contetent = {Help}/>} />
            <Route path='/usuario/perfil' exact render={(props) => <Main {...props} App = {this} contetent = {ProfileData}/>} />
            <Route path='/estudiantes/listado' exact render={(props) => <Main {...props} App = {this} contetent = {StudentApp}/>} />
          </Switch>
          </div>
      </BrowserRouter>
    );
  }
}