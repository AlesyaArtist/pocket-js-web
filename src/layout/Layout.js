import React, {Component} from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import MainPage from '../pages/MainPage';
import AuthForm from '../pages/Auth';
import Form from "../components/authform/Form";
// import RegForm from '../pages/Register';

class Layout extends Component
{
    render(){

        if (this.props.token === null) {
            return (
                <Switch>
                    <Route path="/auth" component={AuthForm}/>
                    <Route path="/register" component={RegForm}/>
                    <Route path="/"><Redirect to="/auth"/></Route>
                </Switch>
            );
        }

        return (
            <>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/chats" exact component={MainPage}/>
                    <Route path="/contacts" exact component={MainPage}/>
                    <Route path="/form" exact component={Form}/>
                    <Route path="*"><Redirect to="/"/></Route>
                </Switch>
            </>
        );
    }
}

const mapStateToProps = (store)  => {
    return {
        token: store.auth.token
    };
}

export default withRouter(connect(mapStateToProps)(Layout));