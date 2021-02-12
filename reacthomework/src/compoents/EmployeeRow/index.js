import React from "react";
import "./style.css";

function EmployeeRow(props) {
    return (
        <div className="card mb-3" style={{ width: "100%" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img  src={props.img} className="card-img" alt={props.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="content">
                  <h5>
                    <strong>{props.name}</strong>
                  </h5>
                  <p className="phone#">
                    phone#<strong>{props.phone}</strong>
                  </p>
                  <p className="email#">
                    email:<strong>{props.email}</strong>
                  </p>
                  <p className="email#">
                    DOB:<strong>{props.dob}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default EmployeeRow;