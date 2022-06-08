//admin olarak ogrenci bilgilerini goruntuleme
import React, { useState } from "react";
import "./AdminShow.css";
import Navbar from "../MainMenuPage/MainMenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

import { database } from "../../components/StudentData";

function AdminShow() {
  const [list, updateList] = useState(database);

  const handleRemoveItem = (e) => {
    const id = e.target.getAttribute("id");
    updateList(list.filter((item) => item.id !== id));
  };

  
  
  function handleClick(e) {
    e.preventDefault();

    let cok = JSON.parse(document.cookie);
    cok.currentUser = {};
    cok.currentUser = undefined;
    document.cookie = JSON.stringify(cok);
    //logine yönlendir
    console.log("lütfeen");
    return (
      <li className="backsite-li">
        <Link to="/exit">anasayfaya dön</Link>
      </li>
    );
  }
  return (
    <>
      <Navbar />
      <button className="backsite-btn" onClick={handleClick}>
       Giriş verilerinizi temizleyip çıkmak için buraya basıp exit yapınız.
      </button>
      {database.map((item, index) => {
        return (
          <div>
            <li key={index} className="main-li">
              <span to={item.path}>
                <img className="image-main" src={item.image} />
                <span name={item.index} onClick={handleRemoveItem}>
                  x
                </span>
                <span>ogrenci adi: {item.username}</span>
                <span>ogrenci soyadı: {item.soyad}</span>
                <span> ogrenci no : {item.ogrenciNo}</span>
              </span>
            </li>
          </div>
        );
      })}
    </>
  );
}

export default AdminShow;
