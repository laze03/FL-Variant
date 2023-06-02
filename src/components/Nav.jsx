import "../App.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "../pages/Dashboard";

const Nav = (props) => (
  <nav id="nav" className="nav">
    <img className="logo" src={logo} />
    <div className="nav-items">
      <ul className="nav-list">
        <li className={`nav-item ${props.class == "1" ? "yes" : "no"}`}>
          <Link to="/FL-Variant/upload">Upload</Link>
        </li>
        <li className={`nav-item ${props.class == "2" ? "yes" : "no"}`}>
          <Link ref={props.dashboardRef} to="/FL-Variant/dashboard">
            Dashboard
          </Link>
        </li>
        <li className={`nav-item ${props.class == "3" ? "yes" : "no"}`}>
          <Link to="/FL-Variant/filter">Filters</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
