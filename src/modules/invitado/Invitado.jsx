import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cosmetic from './pages/Cosmetic';
import Desarrollo from './pages/Desarrollo';
import SocialMedia from './pages/SocialMedia';
import './Invitado.css'

class Invitado extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/' render={() => <Home /> } />
                    <Route exact path='/cosmetic' render={() => <Cosmetic /> } />
                    <Route exact path='/social-media' render={() => <SocialMedia /> } />
                    <Route exact path='/dev' render={() => <Desarrollo /> } />
                </Switch>
            </Fragment>
        );
    }
}

export default Invitado;