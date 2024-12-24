import doubleQuote from "../assets/image/doublequote.png";

const ReviewBox = (props) => {
    return (
        <div className="review-content-container">
            <div className="img-box">
                <img src={props.userImage} alt="user review image" />
            </div>
            <div className="review-content">
                <img src={doubleQuote} alt="double quote icon" />
                <p>{props.reviewText}</p>
                <h3>{props.userName}</h3>
                <h2>{props.userJobTitle}</h2>
            </div>
        </div>
    );
};

export default ReviewBox;
