import React, { useState } from "react";
import "../Modal.scss";

// Redux
import { useDispatch } from "react-redux";


function Signin(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleInput = e => {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.toggleModal(e);
    console.log("handleInput");
    dispatch((input));
  };

  return (
    <div className="Auths flex center">
      <div className="modal flex center column">
        <h1 className="m-0">Sign in</h1>
        <button className="close" onClick={props.toggleModal}>X
        </button>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper flex y-center">
            <input
              id="email"
              value={input.email}
              onChange={handleInput}
              type="email"
              placeholder="Input Your Email..."
              className="input"
              required
            />
          </div>
          <div className="input-wrapper flex y-center">
            <input
              id="password"
              value={input.password}
              onChange={handleInput}
              type="password"
              placeholder="Input Your Password..."
              className="input"
              required
            />
          </div>
          <p className="forgot">
            <a href="/#">Forgot your password?</a>
          </p>

          <button className="button" type="submit">
            <strong>Sign in</strong> &ensp;
          </button>
        </form>

        <p>
          {" "}
          <a id={props.signup} href="/#" onClick={props.toggleModal}>
            Create an account
          </a>{" "}
          to leave a rating and review for free!
        </p>
      </div>
    </div>
  );
}

export default Signin;
