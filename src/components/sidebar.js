import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);

    // Toggle-funktion för att öppna och stänga sidopanelen
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };


    const closeSidebarOnMobile = () => {
        if (window.innerWidth <= 768) {
          setIsOpen(false);
        }
      };

    return (
        <>
      {/* Hamburger meny */}
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Sidopanel */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" className="link-button" activeClassName="active"  onClick={closeSidebarOnMobile}>
                <i className="fas fa-home"></i> Hem
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="link-button" activeClassName="active"  onClick={closeSidebarOnMobile}>
                <i className="fas fa-briefcase"></i> Om Mig
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontakt" className="link-button" activeClassName="active"  onClick={closeSidebarOnMobile}>
                <i className="fas fa-envelope"></i> Kontakt
              </NavLink>
            </li>
           {/* <li>
              <NavLink to="/information" className="link-button" activeClassName="active"  onClick={closeSidebarOnMobile}>
                <i className="fas fa-info-circle"></i> Information
              </NavLink>
            </li>*/}
          </ul>
        </nav>
      </aside>
    </>
    );
}

export default Sidebar;
