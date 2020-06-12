import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../data/axios';

const Header = () => {
    const logOut = () => {
        axios.post('/logout')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log('There was an issue logging out'); 
            })        
    }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Rowing App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-item nav-link active" to="/home">Home<span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-md-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Settings
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/" onClick={logOut}>Logout</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Header;