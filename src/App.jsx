import React from "react";
import { useSelector } from "react-redux";
import Enroll from "./pages/Enroll";
import Chat from "./pages/Chat";
import Final from "./pages/Final";

const YourComponent = () => {
  const currentComponent = useSelector(
    (state) => state.changeComponent.currentComponent
  );
  const name = useSelector((state) => state.changeComponent.name);
  const age = useSelector((state) => state.changeComponent.age);

  return (
    <div className="bg-teal-500 min-h-screen flex items-center justify-center">
      <div className="w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <div className="bg-teal-600 text-white px-4 py-2 rounded-t-lg">
          <h1 className="text-2xl font-bold">Student Enrollment</h1>
        </div>
        <div className="p-4">
          {currentComponent === "Enroll" && <Enroll />}
          {currentComponent === "Chat" && <Chat />}
          {currentComponent === "Final" && <Final name={name} age={age} />}
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
