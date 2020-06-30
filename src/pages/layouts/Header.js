import React, { useState } from 'react';
import Signin from './modal/auths/Signin';
import Signup from './modal/auths/Signup';
import "../../assets/styles/Header.scss";

const Header = () => {
    const [modal, setModal] = useState("");

    const signin = "signin";
    const signup = "signup";

    const toggleModal = e => {
        setModal({
            [e.target.id]: !modal[e.target.id]
        })
    }
    return (
        <div className="header">
            <div className="header__brand">
                <div className="header__brand__container">
                    {/* <img src={logo} alt="logo" /> */}
                    <h4>Subs <span style={{ color: "#8F48EA" }}>It</span> </h4>
                </div>
            </div>
            <div className="header__tag">
                <a href="/#">About</a>
                <a href="/#">Product </a>

            </div>
            <div className="header__user__btn">

                <a href="/#" className="header__user__btn" style={{ backgroundColor: "#8F48EA", padding: "7px", marginBottom: "10px", color: "white" }}>
                    Sign Up
              </a>
                <a href="/#" style={{ color: "black", marginLeft: "10px" }}>
                    Sign in
                    </a>
                {modal[signin] ? (
                    <Signin toggleModal={toggleModal} signup={signup} />
                ) : (
                        false
                    )}
                {modal[signup] ? (
                    <Signup toggleModal={toggleModal} signin={signin} />
                ) : (
                        false
                    )}
            </div>

        </div>
    )
}

export default Header
