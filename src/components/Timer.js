import React, { useEffect } from "react";

const Timer = ({ dispatch, secondRemaining }) => {
  const min = Math.floor(secondRemaining / 60);
  const sec = secondRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },

    [dispatch]
  );
  return (
    <p className="timer">
      {min}:{sec}
    </p>
  );
};

export default Timer;
