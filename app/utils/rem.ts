// import { isTg } from '@src/App';
export const rem = () => {
  // const w = isTg ? (window.innerWidth > 375 && window.innerWidth < 750 ? 375 : 375) : (window.innerWidth > 375 && window.innerWidth < 750 ? 375 : 1440);
  let isPc: boolean = window.innerWidth >= 768;
  const s = window.innerWidth >= 1440 ? 1440 : window.innerWidth;
  // console.log(isPc,isPc ? 1440 : 375);
  const size =
    (s /
      (isPc
        ? 1440
        : window.innerWidth > 500 && window.innerWidth < 768
          ? 768
          : 375)) *
    10;
  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    htmlElement.style.fontSize = size + "px";
  }
  return size;
};
export const remInit = () => {
  rem();
  window.addEventListener("pageshow", rem);
  window.addEventListener("resize", rem);
};

if (typeof window !== "undefined") {
  remInit();
}
