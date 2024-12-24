import React from "react";
import styles from "./How.module.css";
import HowPoint from "./HowPoint";
import image1 from "../../assets/image/how_image1.png";
import image2 from "../../assets/image/how_image2.png";
import image3 from "../../assets/image/how_image3.png";
import HowJobCard from "./HowJobCard";

const How = () => {
    return (
        <div className={styles.how_section}>
            <div className={styles.left_side}>
                <div className={styles.first_left_side}>
                    <HowJobCard howJobCardImage={image1} jobTitle="Product Analyst" jobCompanyName="Paystack" />
                    <HowJobCard howJobCardImage={image3} jobTitle="Securities Trader" jobCompanyName="McKinnesy" />
                </div>
                <div className={styles.second_left_side}>
                    <HowJobCard howJobCardImage={image2} jobTitle="HR Manager" jobCompanyName="Paystack" />
                </div>
            </div>
            <div className={styles.right_side}>
                <h2>How it Works</h2>
                <p>Getajob helps you find the right job easily. Getajob helps you find the right job easily. Getajob helps you find the right job easily.</p>
                <div className={styles.all_how_point}>
                    <HowPoint
                        howTitle="Search Jobs"
                        howInfo="We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity."
                    />
                    <HowPoint
                        howTitle="Create a Profile and Get Noticed"
                        howInfo="Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily."
                    />
                    <HowPoint
                        howTitle="Apply for jobs"
                        howInfo="Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career."
                    />
                </div>
            </div>
        </div>
    );
};

export default How;
