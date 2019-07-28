import React from "react";

const Customer = ({ name, email, age }) => (
  <div className="card card-body mb3">
    <div className="row">
      <div className="col-md-9">
        <h4>{name}</h4>
        <p>{email}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  </div>
);

export default Customer;
