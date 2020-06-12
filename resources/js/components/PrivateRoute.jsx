import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({isAuth, component: Component, ...rest}) => {
    return ( 
        <Route {...rest} render={props => (
            isAuth ? 
                <Component {...props} />
                : 
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )} />
    );
}

const mapStateToProps = state => ({
    isAuth: state.user.auth
})
 
export default connect(mapStateToProps)(PrivateRoute);