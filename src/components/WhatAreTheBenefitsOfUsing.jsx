import PropTypes from "prop-types";
import styles from "./WhatAreTheBenefitsOfUsing.module.css";

const WhatAreTheBenefitsOfUsing = ({
  className = "",
  whatAreTheBenefitsOfUsing,
}) => {
  return (
    <div className={[styles.whatAreTheBenefitsOfUsing, className].join(" ")}>
      <div className={styles.questionContainer}>
        <h1 className={styles.whatAreThe}>{whatAreTheBenefitsOfUsing}</h1>
        <img
          className={styles.arrowCircleRightIcon}
          alt=""
          src="/arrowcircleright-1.svg"
        />
      </div>
    </div>
  );
};

WhatAreTheBenefitsOfUsing.propTypes = {
  className: PropTypes.string,
  whatAreTheBenefitsOfUsing: PropTypes.string,
};

export default WhatAreTheBenefitsOfUsing;
