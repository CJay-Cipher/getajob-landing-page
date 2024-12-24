import styles from "./style.module.css";

const CategoryCard = (props) => {
    return (
        <div className={styles.cat_card}>
            <div className={styles.cat_image}>
                <img src={props.catImage} alt="Cat icon" />
            </div>
            <h3>{props.title}</h3>
            <p>{`(${props.jobCount} new jobs)`}</p>
        </div>
    );
};

export default CategoryCard;
