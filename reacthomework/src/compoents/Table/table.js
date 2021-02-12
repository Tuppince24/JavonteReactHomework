import React from "react";




const Table = (props) => {
   
    return (  
        <div className="form-group">
          <label htmlFor={props.name} className="form-label">{props.title}</label>
          <input
            className="table"
            id={props.name}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder} 
          />
        </div>
      )

        
}

export default Table