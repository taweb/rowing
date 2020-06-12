import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Home = () => {
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">Rowing App</h1>
                <p className="lead">Welcome to the Rowing App</p>
                <hr className="my-4"/>
                <p>Let's get started</p>
                <Link className="btn btn-primary btn-lg mr-3" to="/login" role="button">Sign In</Link>
                <Link className="btn btn-primary btn-lg" to="/register" role="button">Register</Link>
            </div>
        </>
     );
}
 
export default Home;