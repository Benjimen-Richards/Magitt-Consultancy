import React, { useState } from "react";
import "./Login.css";
import { TextField, CircularProgress, Button } from "@material-ui/core";
import axios from "axios";

const Register = (props) => {
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [reenter, setreenter] = useState("");
  const [error, seterror] = useState(true);
  const [submiterror, setsubmiterror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const numberhandler = (e) => {
    setnumber(e.target.value);
  };
  const passwordhandler = (e) => {
    setpassword(e.target.value);
  };
  const repassword = (e) => {
    setreenter(e.target.value);
  };
  const submithandler = () => {
    if (password === reenter) {
      const data = {
        number,
        password,
      };
      seterror(false);
      axios.post("/data", data).then((r) => {
        if (r.data && (number !== "") & (password !== "")) {
          seterror(true);
          props.history.push("/");
        } else {
          seterror(true);

          setsubmiterror("Empty field not accepted");
        }
      });
    } else {
      setpassworderror("Password doesnt match");
    }
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
          label="Enter Your Password"
          type="password"
          value={password}
          onChange={passwordhandler}
        />
        <TextField
          id="standard-basic"
          label="Re-enter password"
          type="password"
          value={reenter}
          onChange={repassword}
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
        {submiterror && <h3>{submiterror}</h3>}
        {passworderror && <h3>{passworderror}</h3>}
      </form>
    </div>
  );
};

export default Register;
