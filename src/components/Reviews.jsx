import React, { useRef, useEffect, useState } from "react";
import ReviewBox from "./ReviewBox";
import userImage1 from "../assets/image/review_0.png";
import userImage2 from "../assets/image/review_1.jpg";
import userImage3 from "../assets/image/review_2.jpg";
import userImage4 from "../assets/image/review_3.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Reviews = () => {
    const reviews = [
        "I love how easy it is to connect with potential employers on this platform! I've already landed 3 interviews and can easily keep track of my applications. No more guessing if my resume has been viewed!",
        "This platform makes job hunting so much easier! I've secured 2 interviews and I appreciate being able to monitor my application progress. It takes away the uncertainty of whether I've been considered.",
        "Using this platform has been a game-changer for my job search! I've had 2 interviews so far and I really like the feature that lets me check my application status. It’s nice not to be left in the dark!",
        "The convenience of this platform is unmatched! I've managed to get 2 interviews lined up and I love being able to track my application status. It really helps to see where I stand with each company!",
    ];

    const reviewRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const scrollLeft = () => {
        if (reviewRef.current) {
            const { scrollLeft, clientWidth } = reviewRef.current;
            if (scrollLeft === 0) {
                reviewRef.current.scrollTo({
                    left: reviews.length * clientWidth,
                });
            } else {
                reviewRef.current.scrollBy({
                    left: -clientWidth,
                });
            }
        }
    };

    const scrollRight = () => {
        if (reviewRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = reviewRef.current;
            if (scrollLeft + clientWidth >= scrollWidth) {
                reviewRef.current.scrollTo({
                    left: 0,
                });
            } else {
                reviewRef.current.scrollBy({
                    left: clientWidth,
                });
            }
        }
    };

    useEffect(() => {
        const intervalId = isHovered ? null : setInterval(scrollRight, 3000); // Auto scroll only when not hovered

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [isHovered]);

    return (
        <section className="customer-reviews">
            <h1>What are our customers saying</h1>
            <div className="slider-arrows">
                <button onClick={scrollLeft}>{<BsArrowLeft size={40} />}</button>
                <button onClick={scrollRight}>{<BsArrowRight size={40} />}</button>
            </div>
            <div
                className="all-reviews-container"
                ref={reviewRef}
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                onMouseLeave={() => setIsHovered(false)} // Set hover state to false
            >
                <ReviewBox userImage={userImage1} reviewText={reviews[0]} userName="Irma Black" userJobTitle="HR Manager at MasterCard" />
                <ReviewBox userImage={userImage2} reviewText={reviews[1]} userName="Segun Adams" userJobTitle="Data Scientist at Google" />
                <ReviewBox userImage={userImage3} reviewText={reviews[2]} userName="Ademola Obinna" userJobTitle="Content Writer at Airtel" />
                <ReviewBox userImage={userImage4} reviewText={reviews[3]} userName="Amarachi Okoye" userJobTitle="Product Analyst at Flutterwave" />
            </div>
        </section>
    );
};

export default Reviews;
