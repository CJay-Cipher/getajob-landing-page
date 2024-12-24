import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const JobCard = (props) => {
    return (
        <div className="job-card">
            <div className="job-type">
                <p>{props.jobType}</p>
            </div>
            <img src={props.companyLogo} alt="company logo" />
            <h4>{props.jobTitle}</h4>
            <hr />
            <h5>{props.companyName}</h5>
            <div className="location">
                <IoLocationOutline size="20px" color="#b8b8b8" />
                <p>{props.location}</p>
                <button className="apply-now">Apply now</button>
            </div>
        </div>
    );
};

export default JobCard;
