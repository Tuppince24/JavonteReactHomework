import React from "react";
import Title from "./Title";
import SearchForm from "./SearchForm";
import { Container } from "react-bootstrap"

function Header(){
    return(
        <nav style={{background: "grey"}}>
        <Container md>
          <Title title= "Search Employee"/>
          <SearchForm button="search"/>
          </Container>  
        </nav>
    );
    
}

export default Header;