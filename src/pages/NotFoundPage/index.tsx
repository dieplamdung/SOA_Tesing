import "./styles.scss";
import Img from "../../assets/images/404.jpg";
import { Button } from "../../components";
import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <div className="wrap-content-page-404">
      <div className="wrap-content">
        <img src={Img} alt="img" className="image" />
        <Link to={"/"}>
          <Button label="Back to home" className="button-back" />
        </Link>
      </div>
    </div>
  );
}
