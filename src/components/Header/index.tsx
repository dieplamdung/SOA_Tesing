/* eslint-disable @typescript-eslint/ban-ts-comment */

import "./styles.scss";
import classNames from "../../utils/classNames";
import { Link } from "react-router-dom";
import { ReactComponent as Mountains } from "../../assets/images/Mountains.svg";
import { ReactComponent as Fishing } from "../../assets/images/Fishing.svg";
import { ReactComponent as Crosshair } from "../../assets/images/Crosshair.svg";
import { ReactComponent as ArrowUpRight } from "../../assets/images/ArrowUpRight.svg";
import { ReactComponent as Menu } from "../../assets/images/Menu.svg";

import { Button } from "../Button";
import { LIST_LANG } from "../../constant";
import { useEffect, useRef, useState } from "react";
import { useGlobalStore } from "../../store";
import { Lang } from "../../store/types";

export function Header() {
  const { lang, langData, setLang } = useGlobalStore();
  const [showListLang, setShowListLang] = useState<boolean>(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      //@ts-ignore
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowListLang(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelectLang = (value: string) => {
    setShowListLang(false);

    setLang(value as Lang);
    console.log(value);
  };

  return (
    <div className={classNames("wrap-header")}>
      <div className={classNames("container", "content-header")}>
        <div className="wrap-content-left">
          <h1 className="logo-text">LOGO SAMPLE</h1>
          <div className="wrap-item-navigation">
            {!!langData?.head_menu?.length &&
              langData?.head_menu?.map((item, index) => {
                if (index > 3) {
                  return null;
                }
                return (
                  <Link
                    to="/"
                    className={classNames("item", `item-${index + 1}`)}
                    key={item}
                  >
                    {item}
                  </Link>
                );
              })}
          </div>
        </div>

        <div className="wrap-content-right">
          <div className="wrap-icon">
            <Mountains />
            <Fishing />
            <Crosshair />
          </div>

          <div className={classNames("wrap-button-change-lang")}>
            <Button
              ref={buttonRef}
              label={`${lang}`.toUpperCase()}
              icon={<ArrowUpRight />}
              className="button-change-lang"
              onClick={() => setShowListLang(!showListLang)}
            />

            <div
              className={classNames(
                "wrap-list-lang",
                showListLang ? "show-up" : "show-down"
              )}
            >
              {LIST_LANG.map((item) => {
                return (
                  <div
                    className={classNames(
                      "item-lang",
                      lang === item ? "item-lang-selected" : ""
                    )}
                    key={item}
                    onClick={() => handleSelectLang(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <Menu className="icon-menu-mobile" />
        </div>
      </div>
    </div>
  );
}
