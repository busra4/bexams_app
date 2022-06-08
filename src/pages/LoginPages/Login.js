import React, { Component, useState, ReactDOM, useContext } from "react";
import MainMenu from "../MainMenuPage/MainMenu";

import { useSetState } from "react-use";

import "./Login.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

import AdminShow from "../AdminPage/AdminShow";
import { database } from "../../components/StudentData";
import { databaseAdmin } from "../../components/Data/AdminData";
import PropTypes from "prop-types";
import Home from "../HomePage/Home";
import NewLog from "./NewLog";
import LessonList from "../../components/LessonList";
function Login() {
  const [currentView, setCurrentView] = React.useState("view2");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmittedAd, setIsSubmittedAd] = useState(false);
  // User Login info

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const [list, setList] = React.useState(database);
  const [username, setName] = React.useState("");
  const [password, setSurname] = React.useState("");

  if (
    document.cookie !== undefined &&
    document.cookie !== null &&
    document.cookie !== NaN &&
    document.cookie
  ) {
    let cook = JSON.parse(document.cookie);
    if (
      cook.currentUser !== undefined &&
      cook.currentUser !== null &&
      cook.currentUser !== NaN
    ) {
      return <Home />;
    } else {
      return <NewLog />;
    }
  }

  function handleChangeSurname(event) {
    setSurname(event.target.value);
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleAdd(event) {
    const newList = [{ username }, { password }, ...list]; 
    setList(newList);
    setName("");
    setSurname("");
  }

  function ChangePage(event) {
    return <div>grgree</div>;
  }

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        if (
          document.cookie === undefined ||
          document.cookie === null ||
          document.cookie === NaN ||
          document.cookie === ""
        ) {
          document.cookie = JSON.stringify({
            currentUser: userData,
            studentsData: [],
          });
        } else {
          let cook = JSON.parse(document.cookie);
          cook.currentUser = userData;
          document.cookie = JSON.stringify(cook);
        }
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const handleSubmitAdmin = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = databaseAdmin.find(
      (user) => user.username === uname.value
    );

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        if (
          document.cookie === undefined ||
          document.cookie === null ||
          document.cookie === NaN ||
          document.cookie === ""
        ) {
          document.cookie = JSON.stringify({
            currentUser: userData,
            studentsData: [],
          });
        } else {
          let cook = JSON.parse(document.cookie);
          cook.currentUser = userData;
          document.cookie = JSON.stringify(cook);
        }
        setIsSubmittedAd(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
        <label for="tab-1" className="tab">
          Öğrenci
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label for="tab-2" className="tab">
          Admin
        </label>
        <div className="login-form">
          <form className="sign-in-htm" onSubmit={handleSubmit}>
            <div>
              <div className="group">
                <label for="user" className="label">
                  Kullanıcı Adı
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  name="uname"
                  required
                  value={username}
                  onChange={handleChangeName}
                />
                {renderErrorMessage("uname")}
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Şifre
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  name="pass"
                  required
                  value={password}
                  onChange={handleChangeSurname}
                />
                {renderErrorMessage("pass")}
              </div>

              <div className="group">
                <button type="submit"> Öğrenci giriş</button>
              </div>
              <div className="hr"></div>
            </div>
          </form>
          <div>
            <form className="sign-up-htm" onSubmit={handleSubmitAdmin}>
              <div className="group">
                <label for="user" className="label">
                  Kullanıcı Adı
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  name="uname"
                  required
                  value={username}
                  onChange={handleChangeName}
                />
                {renderErrorMessage("uname")}
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Şifre
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  name="pass"
                  required
                  value={password}
                  onChange={handleChangeSurname}
                />
                {renderErrorMessage("pass")}
              </div>

              <div className="group">
                <button type="submit">Admin giriş</button>
              </div>
              <div className="hr"></div>
              <div className="foot-lnk"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  console.log(isSubmitted);
  return (
    <div className="app">
      <div className="login-form">
        <div className="hello-main">HOŞ GELDİN {username} !</div>
        {isSubmitted ? <Home /> : isSubmittedAd ? <AdminShow /> : renderForm}
      </div>
    </div>
  );
}

export default Login;
