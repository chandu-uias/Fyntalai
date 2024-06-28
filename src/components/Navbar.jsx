import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ className = "" }) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.navbarContent}>
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
        <div className={styles.navbarButton}>
          <a className={styles.home}>Home</a>
          <a className={styles.about}>About</a>
          <a className={styles.pricing}>Pricing</a>
          <div className={styles.costumerButton}>
            <a className={styles.customers}>Customers</a>
            <img
              className={styles.iconamoonarrowUp2Light}
              alt=""
              src="/iconamoonarrowup2light.svg"
            />
          </div>
        </div>
        <div className={styles.loginRegisterButton}>
          <button className={styles.loginButton}>
            <a className={styles.login}>Login</a>
          </button>
          <button className={styles.registerButton}>
            <a className={styles.register}>Register</a>
          </button>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
