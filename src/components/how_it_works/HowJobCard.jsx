import React from "react";
import styles from "./How.module.css";

const HowJobCard = (props) => {
    return (
        <div className={styles.image_card}>
            <img src={props.howJobCardImage} alt="How Image" />
            <div className={styles.how_job_card_info}>
                <h4>
                    {props.jobTitle}
                    <span> @ {props.jobCompanyName}</span>
                </h4>
            </div>
        </div>
    );
};

export default HowJobCard;
