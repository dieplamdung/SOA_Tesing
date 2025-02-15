
import { ReactComponent as Mountains } from "../../../../assets/images/Mountains.svg";
import { ReactComponent as Fishing } from "../../../../assets/images/Fishing.svg";
import { ReactComponent as Crosshair } from "../../../../assets/images/Crosshair.svg";
import { ReactComponent as ChatsDK } from "../../../../assets/images/dkChats.svg";
import { ReactComponent as ChatsMB } from "../../../../assets/images/mbChats.svg";

import "./styles.scss";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../../../../store";
import classNames from "../../../../utils/classNames";
import { Header } from "../../../../components";

export function Banner() {
  const { langData } = useGlobalStore();
  const LIST_ICON: any = {
    0: <Mountains />,
    1: <Fishing />,
    2: <Crosshair />,
  };
  return (
    <div className={classNames("wrap-banner")}>
      <Header />
      <div className={classNames("container", "wrap-navbar-bottom")}>
        {!!langData?.banner_menu?.length &&
          langData?.banner_menu?.map((item, index) => {
            return (
              <Link to="/" className="wrap-icon" key={index} data-aos="fade-up">
                {LIST_ICON[index]}
                <p className="label">{item}</p>
              </Link>
            );
          })}
      </div>
      <div className={classNames("container", "wrap-icon-chat")}>
        <div className="icon-chat">
          <ChatsDK className="icon-dk" />
          <ChatsMB className="icon-mb" />
        </div>
      </div>
    </div>
  );
}
