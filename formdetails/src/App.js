import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import {Route} from "react-router-dom";
import ConfirmForm from './Components/Form/ConfirmForm';
import UserForm from './Components/Form/UserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" >
                <h1 className="App-title">Form Details</h1>
        </header>
        <div >

          <Route path='/' exact component={Dashboard} />
          <Route path='/ConfirmForm' exact component={ConfirmForm} />

        </div>
      </div>
    );
  }
}

export default App;
