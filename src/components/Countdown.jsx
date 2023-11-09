import React, { useState, useEffect } from "react";
import {final} from "../redux/Action"
import { useDispatch } from "react-redux";


const Countdown = (props) => {
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      } else {
        clearInterval(interval);
        handleFinalStage();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const handleFinalStage = () => {
    dispatch(final(props.state.name, props.state.age));

  };

  return (
    <div className="rounded-xl bg-blue-400 text-white inline-block p-2 ml-16 mt-2">
      {count > 0 ? (
        <p className="text-2xl font-bold">{count}</p>
      ) : (
        <p className="text-2xl font-bold">Thank You!</p>
      )}
    </div>
  );
};

export default Countdown;
