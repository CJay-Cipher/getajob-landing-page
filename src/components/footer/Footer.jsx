import styles from "./footer.module.css";
import footerLogo from "../../assets/image/footer_logo.svg";
import FooterLinks from "./FooterLinks";

// social icons
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
    return (
        <footer>
            <section className={styles.footer_container}>
                <div className={styles.first_column}>
                    <img src={footerLogo} alt="footer card" />
                    <p>Getajobng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site.</p>
                </div>
                <FooterLinks title="Information" firstLink="About Us" secondLink="Contact Us" thirdLink="Terms & Condition" />
                <FooterLinks title="Job Seekers" firstLink="Create Account" secondLink="Job List" thirdLink="FAQ" />
                <FooterLinks title="Employers" firstLink="Create Account" secondLink="Post as Job" thirdLink="FAQ" />
                <div className={styles.fourth_column}>
                    <h3>Social Media:</h3>
                    <ul>
                        <li>{<SlSocialInstagram size={25} />}</li>
                        <li>{<BsTwitterX size={25} />}</li>
                        <li>{<ImFacebook2 size={25} />}</li>
                        <li>{<ImLinkedin size={25} />}</li>
                    </ul>
                </div>
            </section>
            <p>© Copyright CJay 2025, All right reserved</p>
        </footer>
    );
};

export default Footer;
