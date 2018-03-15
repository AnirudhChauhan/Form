import React, { Component } from 'react';
import './../../App.css';
import UserForm from './../Form/UserForm';

class Dashboard extends Component {
    submit=()=>{
        console.log("hi i m here");
        this.props.history.push("./ConfirmForm");
    }
    render() {
        return (
            <div className="App">
                
                
                <UserForm submit={this.submit}/>
                
            </div>
        );
    }
}

export default Dashboard;
