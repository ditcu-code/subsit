import React, { useState } from "react";
import "../Modal.scss";

// Redux
import { useDispatch } from "react-redux";


export default function Signup(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
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
        <h1 className="m-0">Sign up</h1>
        <button className="close" onClick={props.toggleModal}>X
        </button>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper flex y-center">
            <input
              id="name"
              value={input.name}
              onChange={handleInput}
              type="text"
              placeholder="Input Your Username..."
              className="input"
              required
            />
          </div>
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
          <button className="button" type="submit">
            <strong>Sign up</strong> &ensp;
          </button>
        </form>

        <p>
          {" "}
          Already have an account?{" "}
          <a id={props.signin} href="/#" onClick={props.toggleModal}>
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
}
