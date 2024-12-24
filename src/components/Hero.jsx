import React from "react";
import heroImage from "../assets/image/hero-image.svg";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import paystackLogo from "../assets/paystack-removebg.svg";
import googleLogo from "../assets/google-removebg.svg";
import kpmgLogo from "../assets/kpmg-removebg.svg";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="left-side">
                <h1>
                    Find a <span> job </span>easily
                </h1>
                <p>
                    With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers
                    alike.
                </p>
                <div className="job-search">
                    <input type="text" className="search-keyword" placeholder="Enter keywords, skill, interest" />
                    <div className="location-keyword">
                        <IoLocationOutline size="20px" color="#b8b8b8" />
                        <input type="text" placeholder="Location" />
                    </div>
                    <button className="job-search-btn">
                        <AiOutlineSearch size="25px" color="#fff" />
                    </button>
                </div>
                <div className="trusted-partners">
                    <h4>Trusted by:</h4>
                    <div className="trusted-partners-logos">
                        <img src={paystackLogo} alt="" />
                        <img src={googleLogo} alt="" />
                        <img src={kpmgLogo} alt="" />
                    </div>
                </div>
            </div>
            <div className="right-side">
                <img src={heroImage} alt="" />
                <div className="links hero-links">
                    <button className="signup-btn">Sign Up</button>
                    <button className="login-btn">Log in</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
