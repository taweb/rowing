import React, {useState} from 'react';
import { connect } from 'react-redux';
import { validateEmail } from '../utilities/validation';
import classNames from 'classnames';
import axios from '../data/axios';
import { Redirect, useHistory } from 'react-router-dom';
import { loginRequest, loginInit } from '../data/actions';
import Loader from './Loader';

const Login = (props) => {    
    const initialErrors = {
        email: [],
        password: []
    }
    let history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(initialErrors)
    
    const handleChange = event => {
        event.target.type === "email" && setEmail(event.target.value);
        event.target.type === "password" && setPassword(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.userLoginInit();
        const errors = {
            email: [],
            password: []
        }
        const emailFormatted = email.trim()
        const passwordFormatted = password.trim()

        if (emailFormatted.length === 0) {
            errors["email"] = [...errors.email, "Please enter an email"]
        }
        if (!validateEmail(email)) {
            errors["email"] = [...errors.email, "Please enter a valid email"]
        }
        if (passwordFormatted.length === 0) {
            errors["password"] = [...errors.password, "Please enter a password"]
        }        

        if (Object.values(errors).some(fieldErrors => fieldErrors.length > 0)) {
            // errors exist in form frontend
            setErrors(errors)
        } else {
            // send login request to server
            setErrors(initialErrors)
            props.userLoginRequest({email, password})      
        }
    }
    
    return (
        <>
            {props.loading && (
                <Loader />
            )}
            <form type="submit" className="needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="form-group has-error">
                    <label htmlFor="email">Email address</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={handleChange}
                        className={classNames(
                            'form-control', 
                            {'is-invalid': errors.email.length > 0}
                        )}
                        id="email" 
                        aria-describedby="emailHelp"
                    />
                    {errors.email.map((message, index) => (
                        <div className="invalid-feedback" key={index}>{message}</div>
                    ))}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={handleChange}
                        className={classNames(
                            'form-control', 
                            {'is-invalid': errors.password.length > 0}
                        )}
                        id="password"
                    />
                    {errors.password.map((message, index) => (
                        <div className="invalid-feedback" key={index}>{message}</div>
                    ))}
                </div>
                {props.error && (
                    <div className="text-danger mb-1" key={index}>{props.error}</div>
                )}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

const mapStateToProps = state => {
    return {
        error: state.user.error,
        loading: state.user.loading
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginRequest: payload => dispatch(loginRequest(payload)),
    userLoginInit: () => dispatch(loginInit())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);