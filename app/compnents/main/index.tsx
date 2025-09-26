"use client";
import React, { useEffect, useRef } from "react";
// import Banner from "../banner";
import gsap from "gsap";
import styles from "./index.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { remInit } from "@/app/utils/rem";

gsap.registerPlugin(ScrollTrigger);
const index = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const mainBannerRef = useRef<HTMLDivElement>(null);

  //   const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window !== undefined && document) {
      remInit();
    }
    const ctx1 = gsap.context(() => {
      gsap.to([mainRef.current], {
        css: {
          "--main-banner-position": "600", // 更明确的计算
          "--main-position": "-600",
        },
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current, // 哪个区域触发滚动动画
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: true,
        },
      });
    });

    const ctx2 = gsap.context(() => {
      gsap.fromTo(
        [mainRef.current],
        {
          "--color": "black",
          // 起始值（第一个参数）
          // "--lower-black-percentage": "100%",
          // "--lower-white-percentage": "0%",
        },
        {
          "--color": "white",
          // 结束值（第二个参数）
          // "--lower-black-percentage": "100%",
          // "--lower-white-percentage": "100%",
          ease: "none",
          scrollTrigger: {
            trigger: blockRef.current,
            start: "top+=9.3% top",
            end: "top+=40% top",
            scrub: true,
          },
        },
      );
    });

    return () => {
      ctx1.revert();
      ctx2.revert();
    };
  }, []);
  return (
    <div ref={mainRef}>
      <main className={styles.main} ref={blockRef}>
        <section className="relative h-[160vh]">
          <div
            className="relative z-1 h-[60vh] w-screen bg-white"
            data-scroll-repeat
            data-scroll-call="blankDivScrollIn"
            data-scroll
          />

          <div
            data-scroll=""
            data-scroll-sticky=""
            data-scroll-target="#main-banner"
            className={
              styles.mainBanner +
              " absolute top-0 left-0 z-2 flex h-screen w-screen translate-x-[10rem] translate-y-[-4rem] flex-col justify-center text-[8rem]"
            }
            id="display-text"
            data-scroll-repeat=""
            style={{
              color: "var(--color, black)",
            }}
            ref={mainBannerRef}
          >
            <p
              data-content="中国品牌海外推广"
              // className="mix-blend-difference"
              // style={
              //   {
              //     background:
              //       "linear-gradient(to bottom, #000000 var(--upper-black-percentage, 100%), #ffffff var(--upper-white-percentage, 0%))",
              //     WebkitTextFillColor: "transparent",
              //     backgroundClip: "text",
              //   } as React.CSSProperties
              // }
            >
              中国品牌海外推广
            </p>
            <p
              id="last_display_text"
              data-content="合作伙伴"
              // style={{
              //   color: "var(--color, black)",
              // }}
            >
              合作伙伴
            </p>
          </div>
          <div
            data-scroll=""
            data-scroll-sticky=""
            data-scroll-target="#fixed-target"
            // ref={videoContainerRef}
            className={
              // styles.videoContainer +
              "absolute top-0 right-0 bottom-0 left-0 z-0 h-screen w-screen overflow-hidden"
            }
            style={
              {
                //   "--main-banner-position": "0px",
                transform: `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,var(--main-banner-position, 0),0,1)`,
              } as React.CSSProperties
            }
          >
            <video
              id="hero-video"
              className="absolute z-10 h-auto min-h-screen w-auto min-w-screen object-cover"
              // style={{ transform: "translate3d(-50%, -50%, 0)" }}
              loop
              muted
              playsInline
              autoPlay
            >
              <source
                src="https://masonevents.com/wp-content/uploads/2020/08/homepage-video-v0722-1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        <div className="h-screen">a</div>
      </main>
    </div>
  );
};

export default index;
