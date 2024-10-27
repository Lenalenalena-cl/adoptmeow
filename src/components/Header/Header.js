import "./Header.scss";
import { Link } from "react-router-dom";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__container">
          <Link to="/" className="header__logo">
            <p>ADOPTMEOW</p>
          </Link>
          <div>
            <DropDownMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
