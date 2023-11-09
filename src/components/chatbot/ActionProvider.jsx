import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const initialMssg = () => {
    const mssg = createClientMessage("Got It!");

    updateMssg(mssg, "");
    handleNext();
  };

  const updateMssg = (mssg, checker = " ") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, mssg],
      checker,
    }));
  };

  const handleNext = () => {
    const mssg = createChatBotMessage("Pick a slot!", { widget: "slots" });

    updateMssg(mssg, "");
  };

  const handleTime = (selectedDay, selectedSlots) => {
    const mssg = createClientMessage(
      `${selectedDay.date} , ${selectedDay.day} ${selectedSlots.selectedTime}`
    );

    updateMssg(mssg, " ");
    handleName();
  };

  const handleName = () => {
    const mssg = createChatBotMessage("Enter your name!");

    updateMssg(mssg, "name");
  };

  const handleAge = () => {
    const mssg = createChatBotMessage("Enter Your Age!");

    updateMssg(mssg, "age");
  };

  const handleNameInput = (name = " ") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages],
      name,
    }));
  };

  const handleAgeInput = (age = " ") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages],
      age,
    }));
  };

  const finalMssg = () => {
    const mssg = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit",
      { widget: "count" }
    );
    updateMssg(mssg, "");
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleNext,
            initialMssg,
            handleName,
            handleTime,
            handleAge,
            finalMssg,
            handleNameInput,
            handleAgeInput,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
