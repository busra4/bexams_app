import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../../components/Data/SideBarData";
import "./MainMenu.css";
import { IconContext } from "react-icons";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";

function MainMenu(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const Navbar = ({ toggle }) => {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
      if (location.pathname) {
        setNavbar(location.pathname);
      }
    }, [location.pathname]);
  };

  const exit = (props) => {
    let cok = JSON.parse(document.cookie);
    cok.currentUser = {};
    document.cookie = JSON.stringify(cok);
    //logine yönlendir

    <li>
      <Link to="/login">anasayfaya dön</Link>
    </li>;
  };

  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    let cok = JSON.parse(document.cookie);
    cok.currentUser = {};
    document.cookie = JSON.stringify(cok);
    //logine yönlendir

    <li>
      <Link to="/">anasayfaya dön</Link>
    </li>;
  }
  return (
    <>
      <Navbar />
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default MainMenu;
