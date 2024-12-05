import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import "./programm.css";
import { Link } from "react-router-dom";

const Programm = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('http://localhost:3001/exercises?email=user@example.com'); // Replace with dynamic email
        const result = await response.json();
        if (result.status === 'success') {
          setData(result.exercises);
        }
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div>
      <div className="workout-plan">
        <table>
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((exercise, index) => (
              <tr key={index}>
                <td>{exercise.name}</td>
                <td>{exercise.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Programm;
