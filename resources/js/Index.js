import React, {Component} from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { store } from './data'
import {
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import history from './history';
import Login from './components/Login';
import Header from './components/Header';
import Container from './components/Container';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import User from './components/User';
import PrivateRoute from './components/PrivateRoute';

class Index extends Component {
    render () {        
        return (
            <>
                <Container>
                    <Router history={history}>
                        <User>
                            <Header/>
                            <Switch>
                                <Route exact path="/" component={Home} />    
                                <Route exact path="/login">
                                    <Login />
                                </Route>
                                <PrivateRoute exact path="/home" component={Dashboard} />
                            </Switch>
                        </User>
                    </Router>
                </Container>
            </>
        );
    }
}
 
export default Index;

ReactDOM.render(
    <Provider store={ store }>
        <Index />
    </Provider>,
    document.getElementById('index')
);