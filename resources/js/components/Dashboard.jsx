import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../data/axios';
// import { userGet } from '../data/actions';


const Dashboard = (props) => {
    useEffect(() => {
        // props.userGet().catch(error => {
        //     console.log(error);
        // })
        
    }, [])

    return (
        <div>
            <h1>Welcome, {props.user.id}</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    userGet: () => dispatch(userGet())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);