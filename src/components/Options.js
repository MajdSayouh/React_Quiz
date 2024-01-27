import React from "react";

const Options = ({ question, answer, dispatch }) => {
  const hasAnswered = answer !== null;
  return (
    <ul>
      {
        <div className="options">
          {question.options.map((option, index) => (
            <button
              className={`btn btn-option ${index === answer ? "answer" : ""} ${
                hasAnswered
                  ? index === question.correctOption
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              disabled={hasAnswered}
              key={option}
              onClick={() => dispatch({ type: "newAnswer", payLoad: index })}
            >
              {option}
            </button>
          ))}
        </div>
      }
    </ul>
  );
};

export default Options;
