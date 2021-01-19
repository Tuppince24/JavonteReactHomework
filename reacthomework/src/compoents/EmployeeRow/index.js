import React from "react";
import "./style.css";

function EmployeeRow(props) {
  return (
    <div className="table">
        <div className ="content">
            <ul className = "table_content">
                <li>
                    <strong>Image</strong>
                    <div className="img-container">
                        <img alt={props.name} src={props.image} />
                    </div>
                </li>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Phone:</strong> {props.phone}
                </li>
                <li>
                    <strong>Email:</strong> {props.email}
                </li>
                <li>
                    <strong>DOB:</strong> {props.dob}
                </li>
            </ul>
        </div>
    </div>
  );
}

export default EmployeeRow;