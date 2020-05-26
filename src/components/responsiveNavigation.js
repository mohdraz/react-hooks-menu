import React, { useState } from "react";
import { Link } from "@reach/router";

export default function ResponsiveNavigation(props) {
  const { navLinks, background, hoverBackground, linkColor, logo } = props;

  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="responsive-toolbar" style={{ background }}>
      <ul style={{ background }} className={navOpen ? "active" : ""}>
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img src={logo} alt="logo" height="40px" width="40px" />
        </figure>
        {navLinks.map((link, index) => (
          <li
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            style={{
              background: hoverIndex === index ? hoverBackground || "#999" : "",
            }}
          >
            <Link to={link.path} style={{ color: linkColor }}>
              {link.text}
              <i className={link.icon}></i>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
