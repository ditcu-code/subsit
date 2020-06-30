import React, { useState } from "react";
import "../Modal.scss";

// Redux
import { useDispatch } from "react-redux";
import { ACTION_CHANGE_AVATAR } from "../../../store/actions/auth";

export default function Signup(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  const handleInput = e => {
    setInput(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.toggleModal(e);
    console.log("handleInput");
    dispatch(ACTION_CHANGE_AVATAR(input));
  };
  return (
    <div className="Auths flex center">
      <div className="modal flex center column">
        <h1 className="m-0">Change Avatar</h1>
        <button className="close" onClick={props.toggleModal}>
        </button>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper flex y-center">
            <input
              type="file"
              className="input"
              onChange={handleInput}
              required
            />
          </div>

          <button className="button" type="submit">
            <strong>Upload</strong> &ensp;
          </button>
        </form>
      </div>
    </div>
  );
}
