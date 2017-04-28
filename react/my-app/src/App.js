import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './Button.js'
import HeaderContent from './HeaderContent.js'
import StatePlace from './StatePlace.js'
import ListBox from './ListBox.js'
import DataTable from './TableRow.js'
import { Well } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Nav, NavItem , handleSelect} from 'react-bootstrap';
      
 

class App extends Component {

  render() {

    function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
        </div>
        <HeaderContent />
       <MyButton/>
       
      </div>

    );
  }

}

export default App;
