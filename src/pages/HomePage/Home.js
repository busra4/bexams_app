import React from "react";
import "./Home.css";
import Navbar from "../MainMenuPage/MainMenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import NewLog from "../LoginPages/NewLog";
import LessonList from "../../components/LessonList";
import { useState } from "react";
import Login from "../LoginPages/Login";
function Home(props) {
  const [showText, setShowText] = useState(false);
  <div></div>;
  function handleClick(e) {
    e.preventDefault();
//icini bosaltıp verileri temizler ve cikisa yonlendirir
    let cok = JSON.parse(document.cookie);
    cok.currentUser = {};
    document.cookie = JSON.stringify(cok);
    //logine yönlendir
    return (
      <li className="backsite-li">
        <Link to="/exit">anasayfaya dön</Link>
      </li>
    );
  }

  return (
    <div>
      <Navbar user={props.userData} />

      <div className="box-main">
        <div className="label-main">
          <label>
            Eğer öğrenciysen Lessons sekmesine giderek vize ve final sorularını
            çözebilirsin.
            <br />
            <br />
            Lessonstan ders ve sınav seçtikten sonra soruları çözdükten sonra
            kaç doğrun kaç yanlışın var görebilirsin.
          </label>
          <br />
          <br />
          <label>
            Eğer öğretmensen öğrencilerin listesini görüntüleyebilirsin. <br />{" "}
          </label>

          <br />
          <br />
        </div>
      </div>

      <button className="logout" onClick={handleClick}>
        Verilerinizi temizleyin ve exit butonuna basın.
      </button>
    </div>
  );
}

export default Home;
