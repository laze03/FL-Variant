import "../App.css";
import logo from "../assets/logo.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="footer-items">
      <ul className="footer-list">
        <li className={`footer-item li-link `}>
          <a href="#">
            <FiGithub />
          </a>
        </li>
        <li className={`footer-item li-link`}>
          <a href="#">
            <FiExternalLink />
          </a>
        </li>
        <li>
          <p className="footer-item copy">@Copyright 2023 FL Variant</p>
        </li>
        <li className={`footer-item li-link`}>
          <a href="#">
            <FiExternalLink />
          </a>
        </li>
        <li className={`footer-item li-link`}>
          <a href="#">
            <FiGithub />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
