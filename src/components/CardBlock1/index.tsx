import "./styles.scss";
import Img1 from "./../../assets/images/b1.webp";
import Img2 from "./../../assets/images/b2.webp";
import Img3 from "./../../assets/images/b3.webp";
import ArrowUpRight from "../../assets/images/ArrowUpRightBTN.svg";
import classNames from "../../utils/classNames";

type CardBlock1Props = {
  category?: string;
  tagline?: string;
  description?: string;
  cta?: string;
  index: number;
};
export function CardBlock1(props: CardBlock1Props) {
  const { category, tagline, description, cta, index } = props;

  const LIST_ICON = [Img1, Img2, Img3];
  return (
    <div
      className={classNames(
        "wrap-content-card-1",
        index % 2 === 0 ? "wrap-content-card-1-mg" : ""
      )}
      data-aos="zoom-in"
    >
      <div className="wrap-img-card">
        <img src={LIST_ICON[index]} alt="card" className="img-card" />
      </div>
      <div className="wrap-content-text">
        <p className="sub-title-card"> {category}</p>
        <p className="title-card">{tagline} </p>
        <p className="description">{description}</p>
      </div>

      <button className="button-card">
        {cta}
        <img src={ArrowUpRight} alt="icon-arrow" className="icon-arrow" />
      </button>
    </div>
  );
}
