import Title from "./Title";
import WhatAreTheBenefitsOfUsing from "./WhatAreTheBenefitsOfUsing";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.fAQContentWrapper, className].join(" ")}>
      <div className={styles.fAQContent}>
        <Title
          wHYCHOOSEFINANCY="FREQUENTLY ASKED QUESTION"
          secureYourMoneyWithPrecis="Find Answers to Your FAQs on Our Site!"
          financialManagementIsMore="These FAQs are designed to provide you with the information you need quickly and easily."
        />
        <div className={styles.faqs}>
          <div className={styles.whatIsFinancialManagement}>
            <div className={styles.financialManagementContent}>
              <div className={styles.financialManagementDetails}>
                <div className={styles.whatIsFinancial}>
                  What is financial management?
                </div>
                <div className={styles.financialManagementIs}>
                  Financial management is the process of planning, organizing,
                  controlling, and monitoring the financial resources of an
                  individual or company to achieve their financial goals.
                </div>
              </div>
              <img
                className={styles.arrowCircleRightIcon}
                alt=""
                src="/arrowcircleright.svg"
              />
            </div>
          </div>
          <WhatAreTheBenefitsOfUsing whatAreTheBenefitsOfUsing="What are the benefits of using financial management services?" />
          <WhatAreTheBenefitsOfUsing whatAreTheBenefitsOfUsing="How to get started with financial management services?" />
          <WhatAreTheBenefitsOfUsing whatAreTheBenefitsOfUsing="Are financial management services only for people with high income?" />
          <WhatAreTheBenefitsOfUsing whatAreTheBenefitsOfUsing="How can I contact your support team if I have additional questions?" />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
