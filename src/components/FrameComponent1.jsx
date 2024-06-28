import Title from "./Title";
import BenefitNames from "./BenefitNames";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.chooseContentWrapper, className].join(" ")}>
      <div className={styles.chooseContent}>
        <Title
          wHYCHOOSEFINANCY="WHY CHOOSE FINANCY ?"
          secureYourMoneyWithPrecis="Secure Your Money with Precision !"
          financialManagementIsMore="Financial management is more than just saving; it's about securing a stable and sustainable future."
        />
        <div className={styles.savingsParent}>
          <div className={styles.savings}>
            <BenefitNames saveYourMoneyForTheFuture="Save Your Money for the Future" />
            <div className={styles.savingsContent}>
              <div className={styles.benefitAmounts}>
                <h3 className={styles.moneySavings}>Money Savings - 2024</h3>
                <div className={styles.emptyBenefit}>$ 480,640.00</div>
              </div>
              <div className={styles.benefitCollages}>
                <div className={styles.collage}>
                  <div className={styles.travel}>
                    <div className={styles.iconText}>
                      <div className={styles.collageIcon}>
                        <img
                          className={styles.teacherIcon}
                          loading="lazy"
                          alt=""
                          src="/teacher.svg"
                        />
                      </div>
                      <div className={styles.travelText}>
                        <h3 className={styles.collage1}>Collage</h3>
                        <div className={styles.achivedIn4}>
                          Achived in 4 months.
                        </div>
                      </div>
                    </div>
                    <div className={styles.emptySavings}>$82.000</div>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressBarChild} />
                    <div className={styles.progressBarItem} />
                  </div>
                </div>
                <div className={styles.travel1}>
                  <div className={styles.travel2}>
                    <div className={styles.iconText1}>
                      <div className={styles.travelIcon}>
                        <img
                          className={styles.airplaneIcon}
                          loading="lazy"
                          alt=""
                          src="/airplane.svg"
                        />
                      </div>
                      <div className={styles.travelText1}>
                        <h3 className={styles.travel3}>Travel</h3>
                        <div className={styles.achivedIn8}>
                          Achived in 8 months.
                        </div>
                      </div>
                    </div>
                    <div className={styles.emptyExpense}>$46.000</div>
                  </div>
                  <div className={styles.progressBar1}>
                    <div className={styles.progressBarInner} />
                    <div className={styles.lineDiv} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.expenses}>
            <BenefitNames saveYourMoneyForTheFuture="Useful Expenses Reporting" />
            <div className={styles.expensesContent}>
              <div className={styles.expensesTotal2024Parent}>
                <h3 className={styles.expensesTotal}>Expenses Total - 2024</h3>
                <div className={styles.div}>$ 28,380.00</div>
              </div>
              <div className={styles.marchProgressParent}>
                <div className={styles.marchProgress}>
                  <div className={styles.marchProgressChild} />
                  <h3 className={styles.jan}>Jan</h3>
                </div>
                <div className={styles.marchProgress1}>
                  <div className={styles.marchProgressItem} />
                  <h3 className={styles.feb}>Feb</h3>
                </div>
                <div className={styles.marchProgress2}>
                  <div className={styles.marchProgressInner} />
                  <h3 className={styles.mar}>Mar</h3>
                </div>
                <div className={styles.aprilProgress}>
                  <div className={styles.aprilProgressChild} />
                  <h3 className={styles.apr}>Apr</h3>
                </div>
                <div className={styles.mayProgress}>
                  <div className={styles.mayProgressChild} />
                  <h3 className={styles.may}>May</h3>
                </div>
                <div className={styles.juneProgress}>
                  <div className={styles.juneProgressChild} />
                  <h3 className={styles.jun}>Jun</h3>
                </div>
                <div className={styles.julyProgress}>
                  <div className={styles.julyProgressChild} />
                  <h3 className={styles.jul}>Jul</h3>
                </div>
                <div className={styles.augustProgress}>
                  <div className={styles.augustProgressChild} />
                  <h3 className={styles.aug}>Aug</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
