import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.labelWrapper}>
        <button className={styles.label}>
          <div className={styles.joinWithUs}>JOIN WITH US !</div>
        </button>
      </div>
      <div className={styles.joinContent}>
        <div className={styles.joinDescription}>
          <div className={styles.bubble} />
          <h1 className={styles.easierSolutionToContainer}>
            <span>{`Easier `}</span>
            <span className={styles.solution}>Solution</span>
            <span>{` to `}</span>
            <span>Manage</span>
            <span>{` Your `}</span>
            <span className={styles.finance}>Finance</span>
          </h1>
        </div>
        <h3 className={styles.discoverNewWays}>
          Discover new ways to manage your finances, invest efficient and
          smartly, and achieve your financial goals with us.
        </h3>
      </div>
      <div className={styles.secondBannerButtons}>
        <div className={styles.bubble1} />
        <div className={styles.manageContent}>
          <div className={styles.manageButtonWrapper}>
            <button className={styles.manageButton}>
              <div className={styles.manageNow}>Manage Now</div>
            </button>
          </div>
          <div className={styles.playIconWrapper}>
            <img
              className={styles.playIcon}
              loading="lazy"
              alt=""
              src="/play-icon.svg"
            />
          </div>
          <div className={styles.howItWorksWrapper}>
            <div className={styles.howItWorks}>How It Works</div>
          </div>
          <div className={styles.bubbleWrapper}>
            <div className={styles.bubble2} />
          </div>
        </div>
        <div className={styles.incomeContent}>
          <div className={styles.bubbleParent}>
            <div className={styles.bubble3} />
            <div className={styles.weeklyIncome}>
              <div className={styles.weeklyIncomeChild} />
              <div className={styles.weeklyIncomeItem} />
              <div className={styles.weeklyIncomeContent}>
                <div className={styles.weeklyIncomeContentChild} />
                <div className={styles.incomeDetails}>
                  <div className={styles.incomeMetrics}>
                    <div className={styles.monthlyIncomeParent}>
                      <div className={styles.monthlyIncome}>Monthly Income</div>
                      <div className={styles.incomeNumber}>
                        <div className={styles.upNumber}>
                          <div className={styles.upNumberChild} />
                          <div className={styles.numberContent}>
                            <img
                              className={styles.arrowLeftIcon}
                              alt=""
                              src="/arrowleft@2x.png"
                            />
                            <div className={styles.incomeChange}>50%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.graphContainer}>
                      <div className={styles.graphBars}>
                        <div className={styles.div}>50</div>
                        <div className={styles.div1}>40</div>
                        <div className={styles.div2}>30</div>
                        <div className={styles.div3}>20</div>
                        <div className={styles.div4}>10</div>
                      </div>
                      <div className={styles.graphUp}>
                        <div className={styles.up}>
                          <div className={styles.upChild} />
                          <div className={styles.graphUpValue}>
                            <div className={styles.graphUpNumber}>50%</div>
                            <div className={styles.arrowUpWrapper}>
                              <img
                                className={styles.arrowUpIcon}
                                alt=""
                                src="/arrowup.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.lineParent}>
                          <div className={styles.frameChild} />
                          <div className={styles.frameItem} />
                          <div className={styles.frameInner} />
                          <div className={styles.lineDiv} />
                          <div className={styles.frameChild1} />
                          <img
                            className={styles.chartIcon}
                            alt=""
                            src="/chart-1.svg"
                          />
                          <img
                            className={styles.cursorsPointer}
                            alt=""
                            src="/cursors--pointer.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.graphLabels}>
                  <div className={styles.jan}>Jan</div>
                  <div className={styles.feb}>Feb</div>
                  <div className={styles.mar}>Mar</div>
                  <div className={styles.apr}>Apr</div>
                  <div className={styles.may}>May</div>
                  <div className={styles.june}>June</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
