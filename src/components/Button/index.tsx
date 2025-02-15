import "./styles.scss";
import classNames from "../../utils/classNames";
import { Ref } from "react";

type ButtonType = "primary" | "secondary";
type ButtonProps = {
  className?: string;
  label?: string;
  icon?: any;
  onClick?: () => void;
  type?: ButtonType;
  ref?:Ref<HTMLButtonElement> | undefined
};
export function Button(props: ButtonProps) {
  const { className, label, icon, onClick, type = "primary", ref} = props;
  return (
    <button
    ref={ref}
      className={classNames("wrap-button", `button-${type}`, className)}
      onClick={onClick}
    >
      {label} {icon}
    </button>
  );
}
