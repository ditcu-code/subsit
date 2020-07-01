import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Signin from './modal/auths/Signin';
import Signup from './modal/auths/Signup';
import Profile from "./modal/profile";
import Upload from "./modal/profile/upload";
import { ACTION_SIGN_OUT } from "../../stores/actions/auth";
import "../../assets/styles/Header.scss";


const Header = () => {
    const stateUser = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [modal, setModal] = useState("");

    const signin = "signin";
    const signup = "signup";
    const profile = "profile";
    const upload = "upload";

    const doSignout = () => {
        console.log("signout triggered");
        dispatch(ACTION_SIGN_OUT());
    };

    const toggleModal = e => {
        setModal({
            [e.target.id]: !modal[e.target.id]
        });
    };
    return (
        <div className="header">
            <div className="header__brand">
                <div className="header__brand__container">
                    <img src={require('../../assets/images/SubsIt..png')} alt="logo"></img>
                </div>
            </div>
            <div className="header__tag">
                <a href="/#">About</a>
                <a href="/#">Product </a>

            </div>
            {stateUser ? (
                <div className="profile-wrapper">
                    <div className="profile-container">
                        <h1>{stateUser.name}</h1>
                        {/* <img className="profile" src={stateUser.profile.image_url} alt="profile" /> */}
                    </div>
                    <div className="dropdown">
                        <strong className="username">{stateUser.email}</strong>
                        <a id={upload} href="/#" onClick={toggleModal}>
                            Change Avatar
                        </a>
                        <a id={profile} href="/#" onClick={toggleModal}>
                            Update Profile
                        </a>
                        <a href="/#" onClick={doSignout}>
                            Sign out
                        </a>
                    </div>
                </div>
            ) :
                <div className="header__user__btn">

                    <a id={signup} href="/#" className="header__user__btn" style={{ backgroundColor: "#8F48EA", padding: "7px", marginBottom: "10px", color: "white" }} onClick={toggleModal}>
                        Sign Up
              </a>
                    {modal[signup] ? (
                        <Signup toggleModal={toggleModal} signin={signin} />
                    ) : (
                            false
                        )}
                    <a id={signin} href="/#" style={{ color: "black", marginLeft: "10px" }} onClick={toggleModal}>
                        Sign in
                    </a>
                    {modal[signin] ? (
                        <Signin toggleModal={toggleModal} signup={signup} />
                    ) : (
                            false
                        )}
                    {modal[profile] ? <Profile toggleModal={toggleModal} /> : false}
                    {modal[upload] ? <Upload toggleModal={toggleModal} /> : false}
                    {/* {modal[signup] ? (
                    <Signup toggleModal={toggleModal} signin={signin} />
                ) : (
                        false
                    )} */}
                </div>
            }

        </div>
    )
}

export default Header
