import React, { useState } from "react";

const Button = (props) => {
  return <button onClick={props.clickHandler}>{props.text}</button>;
};



const Statistics = (props) => {
  const totalClicks = () => {
    return props.good + props.neutral + props.bad;
  };

  const calcAverage = () => {
    if (totalClicks() > 0) {
      return (props.good + props.bad * -1) / totalClicks();
    } else {
      return 0;
    }
  };

  const calcPositivePercent = () => {
    if (totalClicks() > 0) {
      return props.good / totalClicks();
    } else {
      return 0;
    }
  };

  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>

      <p>Average: {calcAverage()}</p>
      <p>Positive %: {calcPositivePercent()}</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button clickHandler={() => setGood(good + 1)} text="Good" />
      <Button clickHandler={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button clickHandler={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
