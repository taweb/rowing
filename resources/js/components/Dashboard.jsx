import React, { Component } from 'react';

class Dashboard extends Component {
    logout() {
        console.log('logout now');
    }

    render() { 
        return (
            <div>
                <h1>Welcome, Tim</h1>
                <button className="btn btn-primary" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
 
export default Dashboard;