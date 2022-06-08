import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

import "./LessonSelect.css";
import { IconContext } from "react-icons";
import Quiz from "./Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lessons } from "../components/Data/LessonListData";
import Navbar from "../pages/MainMenuPage/MainMenu";

function LessonSelect() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Navbar />

      {lessons.map((item) => {
        let point = 0;

        if (document.cookie !== "") {
          try {
            let obj = JSON.parse(document.cookie);
            if (obj !== undefined && obj !== null && obj !== NaN)
              if (
                obj.studentsData !== undefined &&
                obj.studentsData !== null &&
                obj.studentsData !== NaN
              ) {
                let stuData = obj.studentsData.find(
                  (elem) => elem.ogrId === obj.currentUser.id
                );
                if (
                  stuData !== undefined &&
                  stuData !== null &&
                  stuData !== NaN
                ) {
                  let less = stuData.lessons.find(
                    (data) => data.lessonName === item.path
                  );
                  if (less !== undefined) point = parseInt(less.point);
                }
              }
          } catch {}
        }
        return (
          <div className="question-list-main">
            <li className="li-main" key={item.id}>
              <Link to={item.path}>
                <span>{item.icon} </span>
                <span>{item.name} </span>
                <span>{point}</span>
              </Link>
            </li>
          </div>
        );
      })}
    </>
  );
}

export default LessonSelect;
