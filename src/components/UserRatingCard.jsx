import PropTypes from "prop-types";
import styles from "./UserRatingCard.module.css";

const UserRatingCard = ({
  className = "",
  ellipse3,
  charlesLeclerc,
  businessman,
  star4,
}) => {
  return (
    <div className={[styles.userRatingCard, className].join(" ")}>
      <div className={styles.userRating}>
        <div className={styles.user}>
          <img
            className={styles.userChild}
            loading="lazy"
            alt=""
            src={ellipse3}
          />
          <div className={styles.userProfile}>
            <div className={styles.charlesLeclerc}>{charlesLeclerc}</div>
            <div className={styles.businessman}>{businessman}</div>
          </div>
        </div>
        <div className={styles.starRatings}>
          <img
            className={styles.starIcon}
            loading="lazy"
            alt=""
            src="/star.svg"
          />
          <img
            className={styles.starIcon1}
            loading="lazy"
            alt=""
            src="/star.svg"
          />
          <img
            className={styles.starIcon2}
            loading="lazy"
            alt=""
            src="/star.svg"
          />
          <img
            className={styles.starIcon3}
            loading="lazy"
            alt=""
            src="/star.svg"
          />
          <img className={styles.starIcon4} loading="lazy" alt="" src={star4} />
        </div>
      </div>
    </div>
  );
};

UserRatingCard.propTypes = {
  className: PropTypes.string,
  ellipse3: PropTypes.string,
  charlesLeclerc: PropTypes.string,
  businessman: PropTypes.string,
  star4: PropTypes.string,
};

export default UserRatingCard;
