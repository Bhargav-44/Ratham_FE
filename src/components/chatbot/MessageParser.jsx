import React, { useState } from "react";

const MessageParser = ({ children, actions }) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  
  const parse = (message) => {
      if (children.props.state.checker === "name"){
        actions.handleNameInput(message)
        actions.handleAge();
      }
      if (children.props.state.checker === "age"){
        actions.handleAgeInput(message)
        actions.finalMssg();
      }
  };
    if (age && name) {
      console.log(age, name)
    }
 return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type.name === "Countdown") {
          return React.cloneElement(child, {
            parse: parse,
            actions,
            name,
            age,
          });
        } else {
          return React.cloneElement(child, {
            parse: parse,
            actions,
          });
        }
      })}
    </div>
  );
};

export default MessageParser;
