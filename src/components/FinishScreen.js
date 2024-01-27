import React, { Fragment } from "react";

const FinishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🦸‍♂️";
  if (percentage < 100 && percentage >= 80) emoji = "🦸‍♂️";
  if (percentage < 100 && percentage >= 80) emoji = "😀";
  if (percentage < 80 && percentage >= 50) emoji = "🤔";
  if (percentage < 50 && percentage >= 0) emoji = "😟";

  return (
    <Fragment>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore:{highScore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz!
      </button>
    </Fragment>
  );
};

export default FinishScreen;
