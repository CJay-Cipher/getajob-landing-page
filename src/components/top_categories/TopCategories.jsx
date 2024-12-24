import CategoryCard from "./CategoryCard";
import styles from "./style.module.css";

// Popular Categories card images
import oilGasIcon from "../../assets/image/oil_gas.png";
import healthcare from "../../assets/image/healthcare.png";
import education from "../../assets/image/education.png";
import accounting from "../../assets/image/accounting.png";
import artDesign from "../../assets/image/art-design.png";
import laptop from "../../assets/image/laptop.png";
import security from "../../assets/image/security.png";
import analytics from "../../assets/image/analytics.png";

const TopCategories = () => {
    return (
        <section className={styles.top_categories}>
            <h1>Popular Cateories</h1>
            <div className={styles.cat_container}>
                <CategoryCard catImage={oilGasIcon} title={"Oil and Gas"} jobCount="20" />
                <CategoryCard catImage={healthcare} title={"Healthcare"} jobCount="10" />
                <CategoryCard catImage={education} title={"Education"} jobCount="10" />
                <CategoryCard catImage={accounting} title={"Accounting"} jobCount="10" />
                <CategoryCard catImage={artDesign} title={"Design, Art and Multimedia"} jobCount="20" />
                <CategoryCard catImage={laptop} title={"Technology"} jobCount="10" />
                <CategoryCard catImage={security} title={"Security"} jobCount="10" />
                <CategoryCard catImage={analytics} title={"Data Analyst"} jobCount="10" />
            </div>
        </section>
    );
};

export default TopCategories;
