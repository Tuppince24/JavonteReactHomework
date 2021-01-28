import './App.css';
import React, { Component } from "react";
import Header from "./compoents/Header/header";
import Search from "./compoents/Search/search";
import Wrapper from "./compoents/Wrapper/wrapper";
import Table from "./compoents/Table/table";
import employees from "./employee.json";
class App extends Component {
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  render(){
  return (
    <Wrapper>
      <Header>Employee List</Header>
      <Search/>
      {this.state.employees.map(employee => (
        <Table
          removeEmployee={this.removeEmployee}
          id={employee.id}
          key={employee.id}
          name={employee.name}
          image={employee.image}
          occupation={employee.occupation}
          location={employee.location}
        />
      ))}
    </Wrapper>
  )};
}

export default App;
