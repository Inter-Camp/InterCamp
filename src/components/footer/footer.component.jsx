import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { links, footer } from "../../data/index";
import FBIcon from "../icons/fb-icon";
import TTIcon from "../icons/tt-icon";
import IGIcon from "../icons/ig-icon";

import "./footer.styles.scss";

export const Footer = () => {
  return (
    <footer id="footer">
      <section className="footer-container">
        <section className="footer-info">
          <div className="footer-info-logo-title">
            <div className="logo-container">
              <div className="logo-image-container">
                <img className="logo-image" src={Logo} alt="website logo" />
              </div>
            </div>
            <h1 className="title">{footer.title}</h1>
          </div>
          <p className="footer-p">{footer.p}</p>
          <section className="footer-social">
            <div className="social-logo-container">
              <TTIcon link={footer.links.tt} fs="large" />
            </div>
            <div className="social-logo-container">
              <IGIcon link={footer.links.ig} fs="large" />
            </div>
            <div className="social-logo-container">
              <FBIcon link={footer.links.fb} fs="large" />
            </div>
          </section>
        </section>
        <section className="footer-nav">
          <ul>
            {links.map((link) => (
              <li key={link.title}>
                <Link to={link.linkUrl}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
