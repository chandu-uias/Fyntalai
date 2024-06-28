import Navbar from "../components/Navbar";
import TotalBalance from "../components/TotalBalance";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Testimonials from "../components/Testimonials";
import BalanceBubbleDecoration from "../components/BalanceBubbleDecoration";
import IncomeBubbleDecoration from "../components/IncomeBubbleDecoration";
import FooterInfo from "../components/FooterInfo";
import FIRESCENTS from "../components/FIRESCENTS";
import styles from "./FinanceLandingPage.module.css";

const FinanceLandingPage = () => {
  return (
    <div className={styles.financeLandingPage}>
      <Navbar />
      <section className={styles.financeLandingPageInner}>
        <div className={styles.bubbleParent}>
          <div className={styles.bubble} />
          <TotalBalance />
          <div className={styles.bubbleGroup}>
            <div className={styles.bubble1} />
            <div className={styles.wrapperChart}>
              <img
                className={styles.chartIcon}
                loading="lazy"
                alt=""
                src="/chart.svg"
              />
            </div>
          </div>
          <FrameComponent />
        </div>
      </section>
      <section className={styles.trustedByCompany}>
        <div className={styles.companyLogoWrapper}>
          <img
            className={styles.companyLogoIcon}
            loading="lazy"
            alt=""
            src="/company-logo.svg"
          />
        </div>
        <img
          className={styles.shopifyLogoIcon}
          loading="lazy"
          alt=""
          src="/shopify-logo.svg"
        />
        <img
          className={styles.amazonLogoIcon}
          loading="lazy"
          alt=""
          src="/amazon-logo.svg"
        />
        <img
          className={styles.companyLogoIcon1}
          loading="lazy"
          alt=""
          src="/company-logo-1.svg"
        />
      </section>
      <FrameComponent1 />
      <Testimonials />
      <FrameComponent />
      <section className={styles.promoteBannerWrapper}>
        <div className={styles.promoteBanner}>
          <div className={styles.promoteBannerChild} />
          <div className={styles.promoContainer}>
            <div className={styles.promoElements}>
              <div className={styles.bubble2} />
              <div className={styles.promoHeadingContainerParent}>
                <div className={styles.promoHeadingContainer}>
                  <div className={styles.bubble3} />
                  <h1 className={styles.joinUsAndContainer}>
                    <p className={styles.joinUsAnd}>{`Join us and manage `}</p>
                    <p className={styles.yourFinancialEasily}>
                      your Financial easily!
                    </p>
                  </h1>
                </div>
                <div className={styles.increaseControlOverContainer}>
                  <span className={styles.increaseControlOverContainer1}>
                    <p
                      className={styles.increaseControlOver}
                    >{`Increase control over your finances and `}</p>
                    <p className={styles.achieveFinancialFreedom}>
                      achieve financial freedom by joining.
                    </p>
                  </span>
                </div>
                <div className={styles.promoButtons}>
                  <button className={styles.manageButton}>
                    <div className={styles.joinUs}>Join Us</div>
                  </button>
                  <div className={styles.moreInfoButton}>
                    <div className={styles.bubble4} />
                    <button className={styles.manageButton1}>
                      <div className={styles.forMore}>For More</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BalanceBubbleDecoration />
          <IncomeBubbleDecoration />
        </div>
      </section>
      <footer className={styles.footerWrapper}>
        <div className={styles.footer}>
          <FooterInfo />
          <FIRESCENTS />
        </div>
      </footer>
    </div>
  );
};

export default FinanceLandingPage;
