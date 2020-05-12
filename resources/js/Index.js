import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Container from './components/Container';
import Dashboard from './components/Dashboard.jsx';


class Index extends Component {
    render () {
        return (
            <>
                <Header/>
                <Container>
                    <Router>
                        <Switch>    
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/home" component={Dashboard} />
                            <Route exact path="/dashboard" component={Dashboard}/>
                        </Switch>
                    </Router>
                </Container>
            </>
        );
    }
}
 
export default Index;

ReactDOM.render(<Index />, document.getElementById('index'));