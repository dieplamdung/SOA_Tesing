import { Banner } from "./components/Banner";
import { Block1 } from "./components/Block1";
import { Footer } from "./components/Footer";

import "./styles.scss";
export function HomePage() {
  return (
    <div className="wrap-content-page">
      <Banner />
      <Block1 />
      <Footer />
    </div>
  );
}
