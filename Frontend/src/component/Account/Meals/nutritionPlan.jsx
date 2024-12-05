import React, { useState } from 'react';
import './Meals.css';

// Example usage (assuming you have a component to render this data)
const NutritionPlan = () => {
  const mealData = [
    {
      meal: 'Breakfast',
      calories: '400 kcal',
      examples: [
        'Oatmeal with fruits and nuts',
        'Scrambled eggs with whole-wheat bread and cheese',
        'Fruit and vegetable smoothie',
      ],
    },
    {
      meal: 'Morning Snack',
      calories: '200 kcal',
      examples: [
        'Greek yogurt with fruit and granola',
        'Handful of nuts and dried fruits',
        'Piece of fresh fruit',
      ],
    },
    {
      meal: 'Lunch',
      calories: '500 kcal',
      examples: [
        'Grilled chicken salad with vegetables and vinaigrette',
        'Tuna sandwich on whole-wheat bread with raw vegetables',
        'Vegetable soup with whole-wheat bread',
      ],
    },
    {
      meal: 'Afternoon Snack',
      calories: '200 kcal',
      examples: [
        'Vegetable sticks with hummus',
        'Cottage cheese with fruit',
        'Handful of nuts and dried fruits',
      ],
    },
    {
      meal: 'Dinner',
      calories: '600 kcal',
      examples: [
        'Grilled fish with roasted vegetables',
        'Vegetarian chili with brown rice',
        'Stir-fried chicken with vegetable stir-fry noodles',
      ],
    },
    {
      meal: 'Evening Snack',
      calories: '100 kcal',
      examples: [
        'Plain Greek yogurt',
        'Small handful of nuts',
        'Herbal tea with fruit',
      ],
    },
  ];

  const [mealList, setMealList] = useState(mealData);

  return (
    <div>
      <h2>Weight Loss Nutrition Plan</h2>
      {mealList.map((meal) => (
        <div key={meal.meal} className="meal-item">
          <h3>{meal.meal}</h3>
          <p>Calories: {meal.calories}</p>
          <ul>
            {meal.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NutritionPlan;
