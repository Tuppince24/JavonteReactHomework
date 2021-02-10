import React, { Component } from "react";
import Header from "../compoents/Header/header";
import Search from "../compoents/Search/search";
import Wrapper from "../compoents/Wrapper/wrapper";
import Table from "../compoents/Table/table";
import API from "../utils/api";

class App extends Component {
  state = {
    users: {},
    search: ""
  };

  searchUser = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = e =>{
    const value = e.targe.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.searchMovies(this.state.search);
  }

  render(){
  return (
    <Wrapper>
      <Header>Employee List</Header>
      <Search
        value={this.state.search}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      /> 
      {this.state.users.image ? (
        <Table
          image={this.state.users.image}
          name={this.state.usersser.name}
          phone={this.state.users.phone}
          email={this.state.users.email}
          dob={this.state.users.dob}
        />
      ): (
        <Table/>
      )}
    </Wrapper>
  )};
}

export default App;
