//soruların cevaplandığı ve sonuçların gösterildiği sayfa
import React from "react";
import { questions } from "../components/LessonData";

function Questions() {
  return questions.map((item, id) => {
    return (
      <div key={id}>
        <ul>{item.name} </ul>
        {item.vize.map((subitem) => {
          return (
            <ul>
              <li>{subitem.text}</li>
            </ul>
          );
        })}
        {item.final.map((subitem) => {
          return (
            <ul>
              <li>{subitem.text}</li>
            </ul>
          );
        })}
      </div>
    );
  });
}

export default Questions;
