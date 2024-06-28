import PropTypes from "prop-types";
import styles from "./Title.module.css";

const Title = ({
  className = "",
  wHYCHOOSEFINANCY,
  secureYourMoneyWithPrecis,
  financialManagementIsMore,
}) => {
  return (
    <div className={[styles.title, className].join(" ")}>
      <div className={styles.label}>
        <div className={styles.whyChooseFinancy}>{wHYCHOOSEFINANCY}</div>
      </div>
      <div className={styles.precision}>
        <h1 className={styles.secureYourMoney}>{secureYourMoneyWithPrecis}</h1>
        <div className={styles.management}>
          <h3 className={styles.financialManagementIs}>
            {financialManagementIsMore}
          </h3>
        </div>
      </div>
    </div>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  wHYCHOOSEFINANCY: PropTypes.string,
  secureYourMoneyWithPrecis: PropTypes.string,
  financialManagementIsMore: PropTypes.string,
};

export default Title;
