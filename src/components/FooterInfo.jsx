import PropTypes from "prop-types";
import styles from "./FooterInfo.module.css";

const FooterInfo = ({ className = "" }) => {
  return (
    <div className={[styles.footerInfo, className].join(" ")}>
      <div className={styles.footer}>
        <div className={styles.about}>
          <b className={styles.about1}>About</b>
          <div className={styles.about2}>
            <div className={styles.trendings}>Trendings</div>
            <a className={styles.aboutUs}>About Us</a>
            <div className={styles.features}>Features</div>
          </div>
        </div>
        <div className={styles.company}>
          <b className={styles.company1}>Company</b>
          <div className={styles.partnershipsParent}>
            <div className={styles.partnerships}>Partnerships</div>
            <div className={styles.employee}>Employee</div>
            <div className={styles.security}>Security</div>
          </div>
        </div>
        <div className={styles.support}>
          <b className={styles.support1}>Support</b>
          <div className={styles.supportCenterParent}>
            <div className={styles.supportCenter}>Support Center</div>
            <div className={styles.contactUs}>Contact Us</div>
            <div className={styles.faqs}>FAQs</div>
          </div>
        </div>
        <div className={styles.movement}>
          <b className={styles.movement1}>Movement</b>
          <div className={styles.supportInfo}>
            <div className={styles.whatIsFinancy}>What is Financy?</div>
            <div className={styles.supportUs}>Support Us</div>
          </div>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactDetails}>
          <img
            className={styles.smsIcon}
            loading="lazy"
            alt=""
            src="/sms.svg"
          />
          <div className={styles.financycompanygmailcom}>
            financycompany@gmail.com
          </div>
        </div>
        <div className={styles.socmed}>
          <img
            className={styles.mdifacebookIcon}
            loading="lazy"
            alt=""
            src="/mdifacebook.svg"
          />
          <img
            className={styles.mdilinkedinIcon}
            loading="lazy"
            alt=""
            src="/mdilinkedin.svg"
          />
          <img
            className={styles.mdilinkedinIcon1}
            loading="lazy"
            alt=""
            src="/mdilinkedin-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

FooterInfo.propTypes = {
  className: PropTypes.string,
};

export default FooterInfo;
