import React, { useState } from "react";
import mainLogo from "../assets/main_logo.png";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const Heading = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState); // Toggle the menu state
    };

    return (
        <header className="main-header">
            <img src={mainLogo} alt="Logo" className="main-logo" />
            <nav className={`nav-header ${isMenuOpen ? "active" : ""}`}>
                <a href="#">Companies</a>
                <a href="#">Candidates</a>
                <a href="#">Assessment</a>
                <a href="#">Post a Job</a>
                <a href="#">Career Advice</a>
                <div className="menu-hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? <TfiClose size={30} /> : <CiMenuFries size={30} />}
                </div>
            </nav>
            <div className="links">
                <button className="signup-btn">Sign Up</button>
                <button className="login-btn">Log in</button>
            </div>
        </header>
    );
};

export default Heading;
