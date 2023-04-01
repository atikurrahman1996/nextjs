import React from "react";

import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <ul className="nav">
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link href="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
