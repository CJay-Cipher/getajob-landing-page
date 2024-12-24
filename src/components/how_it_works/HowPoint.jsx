import React from "react";
import { GiCheckMark } from "react-icons/gi";
import styles from "./How.module.css";

const HowPoint = (props) => {
    return (
        <div className={styles.how_point}>
            <div className={styles.how_point_title}>
                <div className={styles.point_title_icon}>
                    <GiCheckMark size="20px" color="#06942a" />
                </div>
                <h4>{props.howTitle}</h4>
            </div>
            <p>{props.howInfo}</p>
        </div>
    );
};

export default HowPoint;
