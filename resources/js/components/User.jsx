import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { authCheck } from '../data/actions';
import Loader from './Loader';

const User = (props) => {
    useEffect(() => {
        props.authCheck()
    }, [])
    
    return (
        <div>
            {!props.init ? (
                <Loader />
            ) : (
                props.children
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    init: state.user.init
})

const mapDispatchToProps = dispatch => ({
    authCheck: () => dispatch(authCheck())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(User);