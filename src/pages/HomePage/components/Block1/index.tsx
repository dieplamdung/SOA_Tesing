import { CardBlock1, TitleBlock } from "../../../../components";
import { useGlobalStore } from "../../../../store";
import classNames from "../../../../utils/classNames";
import "./styles.scss";

export function Block1() {
  const { langData } = useGlobalStore();

  return (
    <div className="wrap-content-block-1">
      <div className={classNames("container", "content-block")}>
        <TitleBlock
          title={langData?.bloc_1?.title || ""}
          label={langData?.bloc_1?.subtitle || ""}
        />
        <div className="wrap-content-card">
          {!!langData?.bloc_1?.cases?.length &&
            langData?.bloc_1?.cases.map((item, index) => {
              return <CardBlock1 key={index} {...item} index={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
