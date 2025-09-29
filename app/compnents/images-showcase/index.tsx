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
    <section className="mt-[-50rem]">
      <div className="mx-[10rem] mb-[10rem] text-4xl text-black">
        关于我们 英国梅森会展管理有限公司（Mason Events Management
        Limited）是一家充满活力、极富创新、踏实务实的国际会展管理及海外品牌活动策划公司。梅森总部设立于英国伦敦，覆盖欧洲，通过国际会展、活动策划、海外数字营销及特色定制四大核心业务方式，为更多的中国企业出海及落地提供专业的知识和服务。
        自2013年创立伊始，英国梅森参与组织世界著名展会并举办知名品牌发布会数百场，为全球超过300家企业提供过专业的会展及品牌活动策划服务，范围覆盖英国、德国、澳大利亚等20多个国家，涉及旅游、机械零部件、信息与通信、设计与艺术、酒类和食品等行业。
        英国梅森团队深谙中西文化，秉承不断开拓的全球化精神，力求帮助更多优秀的中国出海品牌实现海外本土化、特色化和差异化，将更多中国品牌和中国城市名片推广至英国及欧洲。
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
