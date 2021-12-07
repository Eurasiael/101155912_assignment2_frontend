import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ marginBottom: 30 }}>
      <nav className="navbar bg-secondary rounded mt-4 mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            Employee Management
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
