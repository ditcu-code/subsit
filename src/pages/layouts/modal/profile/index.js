import React, { useState } from "react";
import "../Modal.scss";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { ACTION_UPDATE_PROFILE } from "../../../../stores/actions/auth";

export default function Signin(props) {
  const stateUser = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    fullname: stateUser.fullname,
    email: stateUser.email,
    image: stateUser.image
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
    dispatch(ACTION_UPDATE_PROFILE(input));
  };

  return (
    <div className="Auths flex center">
      <div className="modal flex center column">
        <h1 className="m-0">Update Profile</h1>
        <button className="close" onClick={props.toggleModal}>
        </button>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper flex y-center">
            <input
              id="fullname"
              value={input.fullname}
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
              disabled
            />
          </div>

          <button className="button" type="submit">
            <strong>Update</strong> &ensp;
          </button>
        </form>
      </div>
    </div>
  );
}
