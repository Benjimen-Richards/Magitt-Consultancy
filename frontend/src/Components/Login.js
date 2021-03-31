import React, { useState } from "react";
import "./Login.css";
import { Button, CircularProgress } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Login(props) {
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(true);
  const [errortxt, settxt] = useState("");
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
    seterror(false);
    axios.post("/verify", data).then((r) => {
      seterror(true);
      if (r.data === true) {
        setnumber("");
        setpassword("");
        sessionStorage.setItem("token", true);
        props.history.push("/home");
      } else {
        settxt("Number/Password doesnot match");
      }
    });
  };
  return (
    <div className="container">
      <form noValidate autoComplete="off" className="Form_box">
        <h3>Login page</h3>
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
        <Button
          variant="contained"
          color="primary"
          onClick={submithandler}
          style={{ width: "300px", height: "50px" }}
        >
          {error && <span>Submit Your details</span>}
          {!error && <CircularProgress style={{ color: "white" }} />}
        </Button>
        {errortxt && <h3>{errortxt}</h3>}
        <Link to="/register" style={{ cursor: "pointer" }}>
          Register
        </Link>
      </form>
    </div>
  );
}
