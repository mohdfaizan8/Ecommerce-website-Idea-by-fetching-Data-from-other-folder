import React from "react";
import "./style.css";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <img src="https://images.unsplash.com/photo-1575395311793-ad870d50fbd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className="logo" />
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          
          
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li className="services">
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Header;
