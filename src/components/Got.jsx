import React, { useState } from "react";

const Got = (props) => {
  const [clicked, setClicked] = useState(false);

  const initialMssg = () => {
    setClicked(true);
    props.actionProvider.initialMssg();
  };

  return (
    !clicked && (
      <div className="mt-2 ml-16">
        <button
          className="rounded-xl bg-blue-400 py-2 px-4"
          onClick={initialMssg}
        >
          Got It!
        </button>
      </div>
    )
  );
};

export default Got;
