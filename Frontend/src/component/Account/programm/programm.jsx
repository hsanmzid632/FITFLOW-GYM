import React, { useState } from "react";
import Header from "../Header/Header";
import "./programm.css";
import { Link } from "react-router-dom";

const programm = () => {
  const [data, setData] = useState([
    { day: "Day 1", exercises: ["Chest", "Shoulders", "Triceps", "Cardio"] },
    { day: "Day 2", exercises: ["Fasted Cardio"] },
    { day: "Day 3", exercises: ["Rest"] },
    { day: "Day 4", exercises: ["Quads", "Abs", "Cardio"] },
    { day: "Day 5", exercises: ["Fasted Cardio"] },
    { day: "Day 6", exercises: ["Back", "Biceps", "Abs", "Cardio"] },
    { day: "Day 7", exercises: ["Rest"] },
  ]
  );

  return (
    <div>
      <div className="workout-plan">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Exercices</th>
            </tr>
          </thead>
          <tbody>
            {data.map((day) => (
              <tr key={day.day}>
                <td>{day.day}</td>
                <td>{day.exercises.join(", ")}</td>
                <td>
                <Link to="/exercices">
                  <button>show Exercices</button>
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default programm;
