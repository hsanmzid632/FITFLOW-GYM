import React, { useState } from 'react';
import triceps2 from '../../../assets/archive/tricep dips/tricep dips_g3.jpg';
import triceps from '../../../assets/archive/tricep pushdown/tricep pushdown_600001.jpg';
import benchpress from '../../../assets/archive/bench press/bench press_g15.jpg';
import ibenchpress from '../../../assets/archive/incline bench press/incline bench press_g12.jpg';
import dbenchpress from '../../../assets/archive/decline bench press/dbp_g2.jpg';
import fly from '../../../assets/archive/chest fly machine/cfm_g2.jpg';
import latraise from '../../../assets/archive/lateral raises/lateral raise_g5.jpg';
import shpress from '../../../assets/archive/shoulder press/shoulder press_g5.jpg';
import cardio from '../../../assets/archive/cardio/cardio.jpg'
import './exercice.css';

// Example usage (assuming you have a component to render this data)
function Exeecice() {
  const workoutData = [
    {
      exercise: 'Bench Press',
      image: benchpress,
      sets: 4,
      reps: 8,
      rest: 90,
    },
    {
      exercise: 'Incline Bench Press',
      image: ibenchpress,
      sets: 3,
      reps: 10,
      rest: 60,
    },
    {
      exercise: 'Decline Bench Press',
      image: dbenchpress,
      sets: 3,
      reps: 12,
      rest: 60,
    },
    {
      exercise: 'Chest Fly Machine',
      image: fly,
      sets: 3,
      reps: 15,
      rest: 60,
    },
    {
      exercise: 'Lateral Raises',
      image: latraise,
      sets: 3,
      reps: 12,
      rest: 60,
    },
    {
      exercise: 'Shoulder Press',
      image: shpress,
      sets: 3,
      reps: 10,
      rest: 60,
    },
    {
      exercise: 'Triceps Dips',
      image: triceps2,
      sets: 3,
      reps: 10,
      rest: 60, // Rest time in seconds
    },
    {
      exercise: 'Triceps Pushdown',
      image: triceps,
      sets: 3,
      reps: 12,
      rest: 60,
    },
    {
      exercise:'Cardio',
      image:cardio,
      sets: 'for 20 minutes after each workout',
      reps: 'No set number required for cardio',
      rest: 'No'
      
      
    },
  ];

  const [workoutList, setWorkoutList] = useState(workoutData);

  return (
    <div>
      <h2>Day 1	:Chest, Shoulders, Triceps, Cardio</h2>
      {workoutList.map((exercise) => (
        <div key={exercise.exercise} className="workout-item">
          <img src={exercise.image} alt={exercise.exercise} className="workout-image" />
          <div>
            <p className="workout-title">{exercise.exercise}</p>
            <p className="workout-info">Sets: {exercise.sets}, Reps: {exercise.reps}, Rest: {exercise.rest} seconds</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exeecice;
