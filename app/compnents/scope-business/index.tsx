import React from "react";
import styles from "./index.module.css";

const ScopeBusiness = () => {
  return (
    <div className={styles.container + " aaaContainer"}>
      {/* 标题部分 */}
      <div className={styles.titleSection}>
        <h2 className={styles.title}>业务范围</h2>
        <div className={styles.titleLine}></div>
      </div>

      {/* 业务模块网格 */}
      <div className={styles.businessGrid}>
        {/* 01. 国际会展 */}
        <div className={styles.businessItem}>
          <div className={styles.itemNumber}>01.</div>
          <h3 className={styles.itemTitle}>国际会展</h3>
          <p className={styles.itemDescription}>全球展会一站式服务</p>
        </div>

        {/* 02. 活动策划 */}
        <div className={styles.businessItem}>
          <div className={styles.itemNumber}>02.</div>
          <h3 className={styles.itemTitle}>活动策划</h3>
          <p className={styles.itemDescription}>欧洲活动营销策略</p>
        </div>

        {/* 03. 数字营销 */}
        <div className={styles.businessItem}>
          <div className={styles.itemNumber}>03.</div>
          <h3 className={styles.itemTitle}>数字营销</h3>
          <p className={styles.itemDescription}>欧洲媒介传播策略</p>
        </div>

        {/* 04. 特色定制 */}
        <div className={styles.businessItem}>
          <div className={styles.itemNumber}>04.</div>
          <h3 className={styles.itemTitle}>特色定制</h3>
          <p className={styles.itemDescription}>欧洲出访综合服务</p>
        </div>
      </div>

      {/* 详情按钮 */}
      <div className={styles.detailSection}>
        <button className={styles.detailButton}>
          <span>阅读详情</span>
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

      {/* 案例展示部分 */}
      <div className={styles.showcaseSection}>
        <div className={styles.showcaseTitleSection}>
          <h2 className={styles.showcaseTitle}>案例展示</h2>
          <div className={styles.showcaseTitleLine}></div>
        </div>

        <div className={styles.showcaseGrid}>
          {/* 第一行 */}
          <div className={styles.showcaseItem}>
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
                alt="英国伯明翰国际工业分包展"
                className={styles.showcaseImage}
              />
            </div>
            <div className={styles.showcaseText}>
              <h4>英国伯明翰国际工业分包展</h4>
              <p>专业展览服务</p>
            </div>
          </div>

          <div className={styles.showcaseItem}>
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop"
                alt="商务会议"
                className={styles.showcaseImage}
              />
            </div>
            <div className={styles.showcaseText}>
              <h4>商务会议</h4>
              <p>高端会议策划</p>
            </div>
          </div>

          <div className={styles.showcaseItem}>
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop"
                alt="活动现场"
                className={styles.showcaseImage}
              />
            </div>
            <div className={styles.showcaseText}>
              <h4>活动现场</h4>
              <p>创意活动执行</p>
            </div>
          </div>

          {/* 第二行 */}
          <div className={styles.showcaseItem}>
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop"
                alt="团队活动"
                className={styles.showcaseImage}
              />
            </div>
            <div className={styles.showcaseText}>
              <h4>团队活动</h4>
              <p>企业团建服务</p>
            </div>
          </div>

          <div className={styles.showcaseItem}>
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop"
                alt="会议室"
                className={styles.showcaseImage}
              />
            </div>
            <div className={styles.showcaseText}>
              <h4>会议室</h4>
              <p>专业会议场地</p>
            </div>
          </div>

          <div className={styles.showcaseItem}>
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop"
                alt="创新演讲"
                className={styles.showcaseImage}
              />
            </div>
            <div className={styles.showcaseText}>
              <h4>创新演讲</h4>
              <p>Innovation for all</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeBusiness;
