import React, { Component } from 'react';
import DataTable from './TableRow.js'
import { Button } from 'react-bootstrap';
import ReactBootstrap from 'react-bootstrap';
class MyButton extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState() {
      this.setState({data: 'Data updated...'})
        
   }

   render() {
      return (
         <div>
            <Button bsStyle="success" onClick = {this.updateState}>CLICK</Button>
            <p>{this.props.text}</p>
            <h4>{this.state.data}</h4>
            <DataTable/>
         </div>
      );
   }
}

export default MyButton;