import React, { useState } from "react";
import "./Quiz.css";
import { questions } from "../components/Data/LessonData";
import { database } from "./StudentData";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { lessons } from "./Data/LessonListData";

function Quiz(props) {
  console.log(JSON.parse(document.cookie));
  const [currentView, setCurrentView] = useState("view2");

  const [cart, setCart] = useState([]);

  function addItemToCart(e) {
    const item = e.target.value;
    setCart((cart) => [...cart, item]);
    let cook = JSON.parse(document.cookie === "" ? "{}" : document.cookie);
    if (document.cookie !== "") {
      try {
        let obj = JSON.parse(document.cookie);
        if (obj !== undefined && obj !== null && obj !== NaN)
          if (
            obj.studentsData !== undefined &&
            obj.studentsData !== null &&
            obj.studentsData !== NaN &&
            obj.studentsData != []
          ) {
            let stuData = obj.studentsData.find(
              (elem) => elem.ogrId === obj.currentUser.id
            );
            if (stuData !== undefined && stuData !== null && stuData !== NaN) {
              let less = stuData.lessons.find(
                (data) => data.lessonName === location.pathname
              );
              if (less !== undefined) {
                less.point = item;
              } else {
                cook.studentsData
                  .find((elem) => elem.ogrId === obj.currentUser.id)
                  .lessons.push({ lessonName: location.pathname, point: item });
              }
            } else {
              cook.studentsData.push({
                ogrId: cook.currentUser.id,
                lessons: [{ lessonName: location.pathname, point: item }],
              });
            }
          }
      } catch (e) {
        console.log(e);
      }
    }

    document.cookie = JSON.stringify(cook);
  }

  const location = useLocation();

  const str = location.pathname;

  const s = questions.filter((car) => car.category === str);
  console.log(str);

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < s.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const ViewOne = ({ onClick }) => <div className="back_btn"></div>;

  //eger restart butonu eklenmek isterse
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {showResults ? (
        <div className="final-results">
          <h1>Sonuç :</h1>
          <h2>
            {score} tane doğru {s.length} taneden - ({(score / s.length) * 100}
            %)
          </h2>

          <button className="score-btn" value={score} onClick={addItemToCart}>
            skoru kaydet
          </button>

          <button className="backsite-btn">
            <li className="backsite-li">
              <Link to="/home">anasayfaya dön</Link>
            </li>
          </button>
        </div>
      ) : (
        <div className="question-card">
          <h2>{score} gosterme </h2>
          <h2>
            Soru yeri: {s.length} sorudan {currentQuestion + 1} .desiniz 
          </h2>
          <h3 className="question-text">{s[currentQuestion].text}</h3>
          <ul>
            {s[currentQuestion].options.map((option) => {
              return (
                <div className="main_question">
                  {option.id}
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                </div>
              );
            })}
          </ul>
       
        </div>
      )}

      <div className="cart">
        <ul>
          {cart.map((item) => (
            <li className="cart_li" key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
