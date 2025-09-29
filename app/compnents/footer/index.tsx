import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles["footer-container"] + " footer-container"}>
      <div className={styles.footerContent}>
        {/* 主标题部分 */}
        <div className={styles.titleSection}>
          <h1 className={styles.mainTitle}>期待与您合作</h1>
          <h2 className={styles.subTitle}>共创品牌出海未来!</h2>

          {/* 联系我们按钮 */}
          <button className={styles.contactButton}>
            <span>联系我们</span>
            <div className={styles.buttonIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* 邮件订阅部分 */}
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterHeader}>
            <span className={styles.newsletterLabel}>NEWSLETTER</span>
            <span className={styles.newsletterLabelChinese}>订阅</span>
          </div>

          <div className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Your Email Address"
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
