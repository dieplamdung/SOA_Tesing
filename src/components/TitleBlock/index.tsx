import "./styles.scss";

type TitleBlockProps = {
  title: string;
  label?: string;
};
export function TitleBlock(props: TitleBlockProps) {
  const { title, label } = props;
  return (
    <div className="wrap-title-block">
      <div className="wrap-title">
        <div className="line" />
        <p className="title-block">{title}</p>
        <div className="line" />
      </div>
      {!!label && <p className="label-block">{label}</p>}
    </div>
  );
}
