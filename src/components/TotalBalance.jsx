import PropTypes from "prop-types";
import styles from "./TotalBalance.module.css";

const TotalBalance = ({ className = "" }) => {
  return (
    <div className={[styles.totalBalance, className].join(" ")}>
      <div className={styles.totalBalanceChild} />
      <div className={styles.totalBalanceItem} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.balanceContent}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.ellipseDiv} />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.totalBalanceParent}>
            <div className={styles.totalBalance1}>Total Balance</div>
            <div className={styles.balanceAmount}>$4,637.00</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.userBubbleParent}>
            <img
              className={styles.userBubbleIcon}
              loading="lazy"
              alt=""
              src="/ellipse-5@2x.png"
            />
            <div className={styles.userProfile}>
              <div className={styles.userName}>
                <div className={styles.brieLarson}>Brie Larson</div>
                <div className={styles.uiDesigner}>UI Designer</div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild1} />
        </div>
        <div className={styles.spendContentWrapper}>
          <div className={styles.spendContent}>
            <div className={styles.weeklySpend}>Weekly Spend</div>
            <div className={styles.spendBars}>
              <div className={styles.spendBarParent}>
                <div className={styles.spendBar} />
                <div className={styles.spendBarList} />
                <div className={styles.spendBarList1} />
                <div className={styles.spendBarList2} />
                <div className={styles.spendBarList3} />
                <div className={styles.spendBarList4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TotalBalance.propTypes = {
  className: PropTypes.string,
};

export default TotalBalance;
