import Link from "next/link";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoText}>
                <span>Mason</span>
                <br />
                <span className={styles.logoSubtext}>Events</span>
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className={styles.navigation}>
            <div>
              <div
                className={`${styles.navItem} navItem nav-item`}
                data-text="业务范围"
              >
                <span>业务范围</span>
              </div>
            </div>
            <div
              className={`${styles.navItem} navItem nav-item`}
              data-text="案例展示"
            >
              <span>案例展示</span>
            </div>
            <div
              className={`${styles.navItem} navItem nav-item`}
              data-text="行业动态"
            >
              <span>行业动态</span>
            </div>
            <div
              className={`${styles.navItem} navItem nav-item`}
              data-text="关于梅森"
            >
              <span>关于梅森</span>
            </div>
            <div
              className={`${styles.navItem} navItem nav-item`}
              data-text="联系我们"
            >
              <span>联系我们</span>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuButton}>
            <button type="button" aria-label="Toggle menu">
              <svg
                className={styles.menuIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
