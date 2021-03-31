import { Button } from "@material-ui/core";
import React from "react";

const Homepage = (props) => {
  if (sessionStorage.getItem("token") === null) {
    props.history.push("/");
  }
  return (
    <div className="container">
      <div className="Form_box">
        <h1>Welcome to home page</h1>
        <Button onClick={() => props.history.push("/")}>Logout</Button>
      </div>
    </div>
  );
};

export default Homepage;
