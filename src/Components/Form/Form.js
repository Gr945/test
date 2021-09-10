import "./Form.css";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Form(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const addProfile = () => {
    dispatch({ type: "ADD_PROFILE", payload: { login, password } });
    history.push("/profile");
  };

  return (
    <form className="form animate__animated animate__lightSpeedInRight">
      <div className="mb-3">
        <label className="form-label">Login</label>
        <input
          name="login"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {login === "developer21" && password === "123456" ? (
        <button type="submit" className="btn btn-primary" onClick={addProfile}>
          Submit
        </button>
      ) : (
        <button disabled className="btn btn-secondary">
          Submit
        </button>
      )}
    </form>
  );
}

export default Form;
