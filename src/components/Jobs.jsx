import React, { useRef } from "react";
import JobCard from "./JobCard";
import companyLogo1 from "../assets/paystack-2.svg";
import companyLogo2 from "../assets/google_logo.png";
import companyLogo3 from "../assets/flutterwave_logo_full.svg";
import companyLogo4 from "../assets/access_logo.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Jobs = () => {
    const jobsRef = useRef(null); // Create a ref for the jobs container

    const scrollLeft = () => {
        if (jobsRef.current) {
            jobsRef.current.scrollBy({
                left: -300, // Scroll left by 300px
            });
        }
    };

    const scrollRight = () => {
        if (jobsRef.current) {
            jobsRef.current.scrollBy({
                left: 300, // Scroll right by 300px
            });
        }
    };

    return (
        <div className="jobs">
            <h2>Recommended Jobs</h2>
            <div className="recommended-jobs" ref={jobsRef}>
                <JobCard jobType="Full time" companyLogo={companyLogo1} jobTitle="QA Engineer" companyName="Paystack" location="Lagos, Nigeria" />
                <JobCard
                    jobType="Full time"
                    companyLogo={companyLogo2}
                    jobTitle="Digital Marketing / Social media Communications Officer"
                    companyName="Google"
                    location="Lagos, Nigeria"
                />
                <JobCard jobType="Full time" companyLogo={companyLogo3} jobTitle="HR Manager" companyName="flutterwave" location="Lagos, Nigeria" />
                <JobCard jobType="Full time" companyLogo={companyLogo4} jobTitle="QA Engineer" companyName="Access" location="Lagos, Nigeria" />
                <JobCard jobType="Full time" companyLogo={companyLogo1} jobTitle="QA Engineer" companyName="Paystack" location="Lagos, Nigeria" />
                <JobCard jobType="Full time" companyLogo={companyLogo2} jobTitle="Product Analyst" companyName="Google" location="Lagos, Nigeria" />
                <JobCard jobType="Full time" companyLogo={companyLogo3} jobTitle="HR Manager" companyName="flutterwave" location="Lagos, Nigeria" />
                <JobCard jobType="Full time" companyLogo={companyLogo4} jobTitle="QA Engineer" companyName="Access" location="Lagos, Nigeria" />
                <JobCard jobType="Full time" companyLogo={companyLogo1} jobTitle="QA Engineer" companyName="Paystack" location="Lagos, Nigeria" />
                <JobCard jobType="Full time" companyLogo={companyLogo2} jobTitle="Product Analyst" companyName="Google" location="Lagos, Nigeria" />
                <JobCard jobType="Full time" companyLogo={companyLogo3} jobTitle="HR Manager" companyName="flutterwave" location="Lagos, Nigeria" />
                <JobCard jobType="Full time" companyLogo={companyLogo4} jobTitle="QA Engineer" companyName="Access" location="Lagos, Nigeria" />
            </div>
            <button className="slide-left" onClick={scrollLeft}>
                <FaChevronLeft size="18px" color="#14b53a" />
            </button>
            <button className="slide-right" onClick={scrollRight}>
                <FaChevronRight size="18px" color="#14b53a" />
            </button>
        </div>
    );
};

export default Jobs;
