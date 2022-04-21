import { manageData } from "./manageData";
import { rawData } from "../utils/constants";
import "./Challenges.css";
import { useEffect, useState } from "react";

export const Challenges = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    manageData(rawData).then((response) => setQuestions(response));
  });

  return (
    <div className="categories">
      {Object.keys(questions).map((category, index) => {
        return (
          <div>
            <h3 key={index}>{category}</h3>
            <div>
              {questions[category].map((question, id) => {
                return <li key={id} className="questions">{question}</li>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
