import PropTypes from "prop-types";
import styles from "./BenefitNames.module.css";

const BenefitNames = ({ className = "", saveYourMoneyForTheFuture }) => {
  return (
    <div className={[styles.benefitNames, className].join(" ")}>
      <h1 className={styles.saveYourMoney}>{saveYourMoneyForTheFuture}</h1>
      <div className={styles.moreButton}>
        <div className={styles.moreButtonChild} />
        <img
          className={styles.ionarrowUpOutlineIcon}
          loading="lazy"
          alt=""
          src="/ionarrowupoutline.svg"
        />
      </div>
    </div>
  );
};

BenefitNames.propTypes = {
  className: PropTypes.string,
  saveYourMoneyForTheFuture: PropTypes.string,
};

export default BenefitNames;
