import React from "react";
import "./App.css";

import CustomerList from "./components/CustomerList";

function App() {
  return (
    <div className="container m-4">
      <div className="row">
        <h2>Customers</h2>
        <CustomerList />
      </div>
    </div>
  );
}

export default App;
