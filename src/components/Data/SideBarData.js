import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Lessons",
    path: "/lessons",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Exit",
    path: "/exit",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
/*

  {
    title: "Exit",
    path: "/exit",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
*/
