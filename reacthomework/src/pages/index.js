import React from "react";
import Header from "../compoents/Header/header";
import Search from "../compoents/Search/search";
import Wrapper from "../compoents/Wrapper/wrapper";
import EmployeeRow from "../compoents/EmployeeRow/index"
import employee from "../employee.json"


function App() {
  return (
   <Wrapper>
     <Header>Employee Directory</Header>
     <Search/>
     <EmployeeRow
        image={employee[0].image}
        name={employee[0].name}
        phone={employee[0].phone}
        email={employee[0].email}
        dob={employee[0].dob}
      />
      <EmployeeRow
      image={employee[1].image}
      name={employee[1].name}
      phone={employee[1].phone}
      email={employee[1].email}
      dob={employee[1].dob}
      />
      <EmployeeRow
        image={employee[2].image}
        name={employee[2].name}
        phone={employee[2].phone}
        email={employee[2].email}
        dob={employee[2].dob}
      />
      <EmployeeRow
        image={employee[3].image}
        name={employee[3].name}
        phone={employee[3].phone}
        email={employee[3].email}
        dob={employee[3].dob}
      />
      <EmployeeRow
        image={employee[4].image}
        name={employee[4].name}
        phone={employee[4].phone}
        email={employee[4].email}
        dob={employee[4].dob}
      />
      <EmployeeRow
        image={employee[5].image}
        name={employee[5].name}
        phone={employee[5].phone}
        email={employee[5].email}
        dob={employee[5].dob}
      />
      <EmployeeRow
        image={employee[6].image}
        name={employee[6].name}
        phone={employee[6].phone}
        email={employee[6].email}
        dob={employee[6].dob}
      />
      <EmployeeRow
        iimage={employee[7].image}
        name={employee[7].name}
        phone={employee[7].phone}
        email={employee[7].email}
        dob={employee[7].dob}
      />
      <EmployeeRow
        image={employee[8].image}
        name={employee[8].name}
        phone={employee[8].phone}
        email={employee[8].email}
        dob={employee[8].dob}
      />
      <EmployeeRow
        image={employee[9].image}
        name={employee[9].name}
        phone={employee[9].phone}
        email={employee[9].email}
        dob={employee[9].dob}
      />
      <EmployeeRow
        image={employee[10].image}
        name={employee[10].name}
        phone={employee[10].phone}
        email={employee[10].email}
        dob={employee[10].dob}
      />
      <EmployeeRow
        image={employee[11].image}
        name={employee[11].name}
        phone={employee[11].phone}
        email={employee[11].email}
        dob={employee[11].dob}
      />
      <EmployeeRow
        image={employee[12].image}
        name={employee[12].name}
        phone={employee[12].phone}
        email={employee[12].email}
        dob={employee[12].dob}
      />
      <EmployeeRow
        image={employee[13].image}
        name={employee[13].name}
        phone={employee[13].phone}
        email={employee[13].email}
        dob={employee[13].dob}
      />
      <EmployeeRow
        image={employee[14].image}
        name={employee[14].name}
        phone={employee[14].phone}
        email={employee[14].email}
        dob={employee[14].dob}
      />
      <EmployeeRow
        image={employee[15].image}
        name={employee[15].name}
        phone={employee[15].phone}
        email={employee[15].email}
        dob={employee[15].dob}
      />
      <EmployeeRow
        image={employee[16].image}
        name={employee[16].name}
        phone={employee[16].phone}
        email={employee[16].email}
        dob={employee[16].dob}
      />
      <EmployeeRow
        image={employee[17].image}
        name={employee[17].name}
        phone={employee[17].phone}
        email={employee[17].email}
        dob={employee[17].dob}
      />
      <EmployeeRow
        image={employee[18].image}
        name={employee[18].name}
        phone={employee[18].phone}
        email={employee[18].email}
        dob={employee[18].dob}
      />
      
      
   </Wrapper>
  );
}

export default App;