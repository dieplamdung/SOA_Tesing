import "./styles.scss";
import { useGlobalStore } from "../../../../store";
import classNames from "../../../../utils/classNames";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../../../assets/images/facebook.svg";
import { ReactComponent as Instagram } from "../../../../assets/images/instagram.svg";
import { ReactComponent as Youtube } from "../../../../assets/images/youtube.svg";

export function Footer() {
  const { langData } = useGlobalStore();

  return (
    <div className="wrap-content-block-footer">
      <div className={classNames("container", "wrap-content-footer")}>
        <div className="wrap-content-top-footer">
          <div className="wrap-content-address">
            {langData?.footer?.address?.name} <br />
            {langData?.footer?.address?.phone}
            <br />
            {langData?.footer?.address?.location}
          </div>
          <div className="wrap-item-footer-navigation">
            {!!langData?.footer?.links?.length &&
              langData?.footer?.links.map((item) => {
                return (
                  <Link to={item.url} className="item-link" key={item.url}>
                    {item?.name}
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="wrap-content-bottom-footer">
          <p className="label">© BASIC 2024</p>
          <div className="wrap-icon-social">
            <div className="wrap-icon">
              <Facebook />
            </div>
            <div className="wrap-icon">
              <Instagram />
            </div>
            <div className="wrap-icon">
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
