import PropTypes from "prop-types";
import styles from "./FIRESCENTS.module.css";

const FIRESCENTS = ({ className = "" }) => {
  return (
    <div className={[styles.fireScents, className].join(" ")}>
      <img className={styles.fireScentsChild} alt="" src="/line-22.svg" />
      <div className={styles.copyrightDetails}>
        <div className={styles.companyLogo}>
          <div className={styles.companyLogo1}>
            <img
              className={styles.fictionalCompanyLogo}
              loading="lazy"
              alt=""
              src="/fictional-company-logo.svg"
            />
            <img
              className={styles.financyIcon}
              loading="lazy"
              alt=""
              src="/financy.svg"
            />
          </div>
        </div>
        <div className={styles.financyAllRight}>
          © Financy All Right Reserved
        </div>
        <div className={styles.termsPrivacySecurity}>
          <div className={styles.terms}>Terms</div>
          <div className={styles.privacy}>Privacy</div>
          <div className={styles.security}>Security</div>
        </div>
      </div>
    </div>
  );
};

FIRESCENTS.propTypes = {
  className: PropTypes.string,
};

export default FIRESCENTS;
