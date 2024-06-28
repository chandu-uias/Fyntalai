import PropTypes from "prop-types";
import styles from "./BalanceBubbleDecoration.module.css";

const BalanceBubbleDecoration = ({ className = "" }) => {
  return (
    <div className={[styles.balanceBubbleDecoration, className].join(" ")}>
      <div className={styles.bubble} />
      <div className={styles.bubble1} />
      <div className={styles.totalBalance}>
        <div className={styles.totalBalanceChild} />
        <div className={styles.totalBalanceItem} />
        <div className={styles.balanceElements}>
          <div className={styles.balanceElementsChild} />
          <div className={styles.balanceDetails}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <div className={styles.shoppingbag} />
              <div className={styles.button} />
            </div>
          </div>
          <div className={styles.balanceValueContainer}>
            <div className={styles.balanceValueDetails}>
              <div className={styles.totalBalance1}>Total Balance</div>
            </div>
            <div className={styles.balanceAmountContainer}>
              <div className={styles.balanceAmountDetails}>
                <div className={styles.balanceAmount}>$4,637.00</div>
              </div>
              <div className={styles.balanceBars}>
                <div className={styles.button1} />
                <div className={styles.userPictureContainer}>
                  <img
                    className={styles.baboutIcon}
                    loading="lazy"
                    alt=""
                    src="/ellipse-5-1@2x.png"
                  />
                  <div className={styles.userInfoContainer}>
                    <div className={styles.userNameContainer}>
                      <div className={styles.brieLarson}>Brie Larson</div>
                      <div className={styles.uiDesigner}>UI Designer</div>
                    </div>
                  </div>
                </div>
                <div className={styles.about} />
              </div>
            </div>
          </div>
          <div className={styles.weeklySpendContainer}>
            <div className={styles.weeklySpendDetails}>
              <div className={styles.weeklySpend}>Weekly Spend</div>
              <div className={styles.spendBars}>
                <div className={styles.shoppingbagParent}>
                  <div className={styles.shoppingbag1} />
                  <div className={styles.button2} />
                  <div className={styles.about1} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                  <div className={styles.shoppingbag2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BalanceBubbleDecoration.propTypes = {
  className: PropTypes.string,
};

export default BalanceBubbleDecoration;
