import React from "react";
import { Route } from "react-router";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Homepage} />
    </div>
  );
};

export default App;
