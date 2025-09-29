"use client";
import React, { useRef, useEffect } from "react";
import styles from "./index.module.css";

const ImagesShowcase = () => {
  const images = [
    "https://masonevents.com/wp-content/uploads/2020/07/album-1.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-2.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-3.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-4.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-5.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-6.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-7.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-8.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-9.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-10.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-1.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-2.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-3.jpg",
    "https://masonevents.com/wp-content/uploads/2020/07/album-4.jpg",
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, width } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const center = width / 2;

      // 计算鼠标位置相对于中心的偏移比例 (-0.5 to 0.5)
      const offset = (mouseX - center) / center;

      // 定义最大移动距离 (例如 10rem，即 160px)
      const maxMove = 160;
      const moveX = offset * maxMove;

      container.style.setProperty("--mouse-translate-x", `${moveX}px`);
    };

    const handleMouseLeave = () => {
      // 鼠标离开时恢复默认值
      // container.style.setProperty("--mouse-translate-x", "0px");
    };

    container.addEventListener("mousemove", handleMouseMove);
    // container.addEventListener("mouseleave", handleMouseLeave);

    // 清理事件监听器
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      // container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="mt-[-25%]">
      <div className="mx-[10rem] mb-[10rem] text-4xl text-black">
        Hi! We need: 1. Smart contract engineer 2. Frontend developers 3.
        Blockchain developers 4. UX/UI designers (experience with crypto
        projects preferred) 5. Security experts (cryptographic protocols,
        auditing) 6. Product & Community managers
      </div>
      <section className={styles.showcaseSection}>
        <div ref={containerRef} className={styles.imagesContainer}>
          {images.slice(images.length / 2).map((_, index) => (
            <div className={styles.imageColumn} key={index}>
              <div className={index % 2 ? styles.biggerImg : styles.smallerImg}>
                <div className={styles.imageWrapper}>
                  <img
                    src={images[2 * index]}
                    alt={`Image ${2 * index}`}
                    className={styles.image}
                  />
                </div>
              </div>
              <div className={index % 2 ? styles.smallerImg : styles.biggerImg}>
                <div className={styles.imageWrapper}>
                  <img
                    src={images[2 * index + 1]}
                    alt={`Image ${2 * index + 1}`}
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ImagesShowcase;
