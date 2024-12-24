import styles from "./footer.module.css";

const FooterLinks = (props) => {
    return (
        <div className={styles.footer_column}>
            <h3>{props.title}</h3>
            <ul>
                <li>{props.firstLink}</li>
                <li>{props.secondLink}</li>
                <li>{props.thirdLink}</li>
            </ul>
        </div>
    );
};

export default FooterLinks;
