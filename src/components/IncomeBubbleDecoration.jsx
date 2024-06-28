import PropTypes from "prop-types";
import styles from "./IncomeBubbleDecoration.module.css";

const IncomeBubbleDecoration = ({ className = "" }) => {
  return (
    <div className={[styles.incomeBubbleDecoration, className].join(" ")}>
      <div className={styles.bubble} />
      <div className={styles.bubble1} />
      <div className={styles.weeklyIncome}>
        <div className={styles.weeklyIncomeChild} />
        <div className={styles.weeklyIncomeItem} />
        <div className={styles.incomeElements}>
          <div className={styles.incomeElementsChild} />
          <div className={styles.incomeDetails}>
            <div className={styles.incomeValueContainer}>
              <div className={styles.incomeValues}>
                <div className={styles.monthlyIncome}>Monthly Income</div>
                <div className={styles.upNumber}>
                  <div className={styles.upNumberChild} />
                  <div className={styles.changeDetails}>
                    <img
                      className={styles.arrowLeftIcon}
                      loading="lazy"
                      alt=""
                      src="/arrowleft-1@2x.png"
                    />
                    <div className={styles.changeAmount}>50%</div>
                  </div>
                </div>
              </div>
              <div className={styles.placeholder}>
                <div className={styles.placeholderContainer}>
                  <div className={styles.emptyPlaceholders}>50</div>
                  <div className={styles.emptyPlaceholders1}>40</div>
                  <div className={styles.emptyPlaceholders2}>30</div>
                  <div className={styles.emptyPlaceholders3}>20</div>
                  <div className={styles.emptyPlaceholders4}>10</div>
                </div>
                <div className={styles.increaseIndicator}>
                  <div className={styles.up}>
                    <div className={styles.upChild} />
                    <div className={styles.increaseValueContainer}>
                      <div className={styles.increaseValue}>50%</div>
                      <div className={styles.arrowUpWrapper}>
                        <img
                          className={styles.arrowUpIcon}
                          alt=""
                          src="/arrowup-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.chartArea}>
                    <div className={styles.chartAreaChild} />
                    <div className={styles.chartAreaItem} />
                    <div className={styles.chartAreaInner} />
                    <div className={styles.lineDiv} />
                    <div className={styles.chartAreaChild1} />
                    <img
                      className={styles.chartIcon}
                      alt=""
                      src="/chart-2.svg"
                    />
                    <img
                      className={styles.cursorsPointer}
                      loading="lazy"
                      alt=""
                      src="/cursors--pointer-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.chartMonths}>
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
  );
};

IncomeBubbleDecoration.propTypes = {
  className: PropTypes.string,
};

export default IncomeBubbleDecoration;
