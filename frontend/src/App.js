import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
export default function App() {
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const numberhandler = (e) => {
    setnumber(e.target.value);
  };
  const passwordhandler = (e) => {
    setpassword(e.target.value);
  };
  const submithandler = () => {
    const data = {
      number,
      password,
    };
    axios.post("/data", data).then((r) => {
      if (r.data) {
        alert("Updated");
        setnumber("");
        setpassword("");
      }
    });
  };
  return (
    <div className="container">
      <form noValidate autoComplete="off" className="Form_box">
        <TextField
          id="standard-basic"
          label="Enter Your number"
          type="number"
          value={number}
          onChange={numberhandler}
        />
        <TextField
          id="standard-basic"
          label="Enter Your password"
          type="password"
          value={password}
          onChange={passwordhandler}
        />
        <Button variant="contained" color="primary" onClick={submithandler}>
          Submit Your details
        </Button>
      </form>
    </div>
  );
}
