import React, { Component } from 'react';
 import { Nav, NavItem , handleSelect} from 'react-bootstrap';
      
class ListBox extends Component {
    
   render() {
function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}
    return (
<Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
    <NavItem eventKey={1} >KKR</NavItem>
    <NavItem eventKey={2} >RCB</NavItem>
    <NavItem eventKey={3} >RPS</NavItem>
  </Nav>

    );
  }}

  export default ListBox;