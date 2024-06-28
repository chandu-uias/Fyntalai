import Title from "./Title";
import UserRatingCard from "./UserRatingCard";
import PropTypes from "prop-types";
import styles from "./Testimonials.module.css";

const Testimonials = ({ className = "" }) => {
  return (
    <section className={[styles.testimonials, className].join(" ")}>
      <div className={styles.testimonialsContent}>
        <Title
          wHYCHOOSEFINANCY="WHAT THEY SAY ABOUT US "
          secureYourMoneyWithPrecis="Many Good Reviews from Users!"
          financialManagementIsMore="Financy gets good reviews from many users for its convenient and useful features."
        />
        <div className={styles.usersReviewRating}>
          <div className={styles.review1}>
            <div className={styles.review}>
              <div className={styles.userReviewCard}>
                <div className={styles.userReview}>
                  <div className={styles.firstUser}>
                    <img
                      className={styles.firstUserChild}
                      loading="lazy"
                      alt=""
                      src="/ellipse-3@2x.png"
                    />
                    <div className={styles.firstName}>
                      <div
                        className={styles.jessicaChani}
                      >{`Jessica Chani `}</div>
                      <div className={styles.teacher}>Teacher</div>
                    </div>
                  </div>
                  <img
                    className={styles.userReviewChild}
                    alt=""
                    src="/line-20.svg"
                  />
                  <div className={styles.securityIsVeryContainer}>
                    <p className={styles.securityIsVery}>
                      Security is very important in online financial management,
                      and Financy use high-level encryption to protect users'
                      sensitive data, so users can feel safe.
                    </p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p
                      className={styles.notOnlyThat}
                    >{`Not only that, but Financy also provides various additional features, investment , and even personalized financial advice. `}</p>
                  </div>
                </div>
              </div>
              <UserRatingCard
                ellipse3="/ellipse-3-1@2x.png"
                charlesLeclerc="Charles Leclerc"
                businessman="Businessman"
                star4="/star-4.svg"
              />
            </div>
            <div className={styles.users}>
              <b className={styles.emptyUsers}>
                <span className={styles.emptyUsersTxtContainer}>
                  <span>420.000</span>
                  <span className={styles.span}>+</span>
                </span>
              </b>
              <h3 className={styles.financyUsers}>Financy users.</h3>
            </div>
          </div>
          <div className={styles.review2}>
            <div className={styles.review3}>
              <UserRatingCard
                ellipse3="/ellipse-3-2@2x.png"
                charlesLeclerc="Agnes Florence"
                businessman="Doctor"
                star4="/star.svg"
              />
              <div className={styles.userReviewCard1}>
                <div className={styles.userReview1}>
                  <div className={styles.reviewerImage}>
                    <img
                      className={styles.reviewerPictureIcon}
                      loading="lazy"
                      alt=""
                      src="/ellipse-3-3@2x.png"
                    />
                    <div className={styles.reviewerInfo}>
                      <div className={styles.danielSigma}>Daniel Sigma</div>
                      <div className={styles.architect}>Architect</div>
                    </div>
                  </div>
                  <img
                    className={styles.userReviewItem}
                    alt=""
                    src="/line-20.svg"
                  />
                  <div className={styles.overallTheWebsiteContainer}>
                    <p
                      className={styles.overallTheWebsite}
                    >{`Overall, the website is a very useful tool for anyone looking to manage their finances more `}</p>
                    <p
                      className={styles.easyEffectively}
                    >{`easy & effectively. `}</p>
                    <p className={styles.blankLine1}>&nbsp;</p>
                    <p className={styles.withACombination}>
                      With a combination of a friendly UI and a focus on
                      security, this website is worth considering for anyone
                      serious about achieving financial freedom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.usersReview}>
              <b className={styles.reviewCount}>
                <span className={styles.reviewCountTxtContainer}>
                  <span>200,000</span>
                  <span className={styles.span1}>+</span>
                </span>
              </b>
              <h3 className={styles.goodReviewsFrom}>
                Good reviews from user.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
