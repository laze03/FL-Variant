import "../App.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const Nav = (props) => (
  <nav id="nav" className="nav">
    <img className="logo" src={logo} />
    <div className="nav-items">
      <ul className="nav-list">
        <li className={`nav-item ${props.class == "1" ? "yes" : "no"}`}>
          Upload
        </li>
        <li className={`nav-item ${props.class == "2" ? "yes" : "no"}`}>
          Filter
        </li>
        <li className={`nav-item ${props.class == "3" ? "yes" : "no"}`}>
          Visuals
        </li>
      </ul>
    </div>
    <FontAwesomeIcon icon={faQuestion} size="l" style={{ color: "#ffffff" }} />
  </nav>
);

export default Nav;
