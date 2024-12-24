import { HiOutlineArrowRight } from "react-icons/hi";
import companyLogos from "../assets/company_logos.svg";

const Companies = () => {
    return (
        <section className="companies-section">
            <div className="companies-content">
                <h1>Over 1000+ jobs from top companies in our network</h1>
                <p>
                    <span>
                        Every day we index millions of jobs directly from employer websites. We're committed to accurate, high-quality jobs so you won't find old,
                        duplicated, or spammy listings here.
                    </span>
                    <br />
                    <span>Organize and automate your job search while at home or on the go. We'll deliver new, relevant jobs of interest straight to your inbox.</span>
                </p>
                <button>Learn More {<HiOutlineArrowRight />}</button>
            </div>
            <div className="company-logos">
                <img src={companyLogos} alt="Network companies" />
            </div>
        </section>
    );
};

export default Companies;
