import Main from "./compnents/main";
import Header from "./compnents/header";
import ScopeBusiness from "./compnents/scope-business";
import ImagesShowcase from "./compnents/images-showcase";
import Footer from "./compnents/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <ImagesShowcase />
      <ScopeBusiness />
      <Footer />
    </>
  );
}
