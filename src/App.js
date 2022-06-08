import Login from "./pages/LoginPages/Login";

import { useState } from "react";

import LessonList from "./components/LessonList";
import Quiz from "./components/Quiz";
import Home from "./pages/HomePage/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import React, { useContext } from "react";
import NewLog from "./pages/LoginPages/NewLog";
import LessonSelect from "./components/LessonSelect";

const App = () => {
  const [state, setState] = useState("start");
  const [ans, setAns] = useState([]);

  return (
    <div>
      <div>
        <Router basename={window.location.pathname || ""}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/exam-ap" element={<Login />} />
            <Route path="/home" element={<Home x />} />
            <Route path="/lessons" element={<LessonList />} />
            <Route path="/exit" element={<NewLog />} />
            <Route path="/ders1-vize" element={<Quiz />} />
            <Route path="/ders1-final" element={<Quiz />} />
            <Route path="/ders2-vize" element={<Quiz />} />
            <Route path="/ders2-final" element={<Quiz />} />
            <Route path="/ders3-vize" element={<Quiz />} />
            <Route path="/ders3-final" element={<Quiz />} />
            <Route path="/ders4-vize" element={<Quiz />} />
            <Route path="/ders4-final" element={<Quiz />} />
            <Route path="/ders5-vize" element={<Quiz />} />
            <Route path="/ders5-final" element={<Quiz />} />
            <Route path="/ders6-vize" element={<Quiz />} />
            <Route path="/ders6-final" element={<Quiz />} />
            <Route path="/ders7-vize" element={<Quiz />} />
            <Route path="/ders7-final" element={<Quiz />} />
            <Route path="/ders8-vize" element={<Quiz />} />
            <Route path="/ders8-final" element={<Quiz />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
