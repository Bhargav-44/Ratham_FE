import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slots = (props) => {
  const data = [
    { title: "MORNING", time: ["09:00am", "10:00am", "11:00am"] },
    { title: "AFTERNOON", time: ["12:00pm", "02:00pm", "03:00pm", "04:00pm"] },
    { title: "EVENING", time: ["06:00pm", "07:00pm", "08:00pm", "09:00pm"] },
  ];

  const days = [
    { date: "4 NOV", day: "SAT" },
    { date: "5 NOV", day: "SUN" },
    { date: "6 NOV", day: "MON" },
    { date: "7 NOV", day: "TUE" },
  ];

  const [selectedDay, setSelectedDay] = useState({ date: "", day: "" });
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [final, setFinal] = useState(false);

  const handleDaySelection = (selectedDate, selectedDayName) => {
    setSelectedDay((prev) =>
      prev.date === selectedDate
        ? { date: "", day: "" }
        : { date: selectedDate, day: selectedDayName }
    );
  };

  const handleSlotSelection = (slot, title) => {
    const isSelected = selectedSlots.find(
      (s) => s.selectedTime === slot && s.title === title
    );

    if (isSelected) {
      const filteredSelection = selectedSlots.filter(
        (s) => !(s.selectedTime === slot && s.title === title)
      );
      setSelectedSlots(filteredSelection);
    } else {
      const timeOfDay = data.find((el) => el.time.includes(slot));

      const filteredSelection = selectedSlots.filter(
        (s) => s.title !== timeOfDay.title
      );

      if (timeOfDay) {
        const newSelection = { title: timeOfDay.title, selectedTime: slot };
        setSelectedSlots([...filteredSelection, newSelection]);
      }
    }
  };

  const isDaySelected = (date) => {
    return selectedDay.date === date;
  };

  const isSlotSelected = (slot, title) => {
    return selectedSlots.some(
      (s) => s.selectedTime === slot && s.title === title
    );
  };

  const handleSubmit = () => {
    setFinal(true);
    props.actionProvider.handleTime(selectedDay, selectedSlots[0]);
  };

  return (
    !final && (
      <div className="mt-4">
        <Swiper spaceBetween={20} slidesPerView={2}>
          {days.map((day) => (
            <SwiperSlide key={day.date}>
              <div
                className={
                  isDaySelected(day.date)
                    ? "rounded-xl py-2 px-4 bg-green-500 text-center cursor-pointer"
                    : "rounded-xl py-2 px-4 bg-blue-500 text-center cursor-pointer"
                }
                onClick={() => handleDaySelection(day.date, day.day)}
              >
                <p>{day.date}</p>
                <p>{day.day}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {data.map((el) => (
          <div key={el.title}>
            <p className="font-bold">{el.title}</p>

            <Swiper spaceBetween={20} slidesPerView={2}>
              {el.time.map((ele) => (
                <SwiperSlide key={ele}>
                  <div className="rounded-xl p-2 px-4 bg-grey-400">
                    <button
                      key={ele}
                      className={
                        isSlotSelected(ele, el.title)
                          ? "rounded-xl bg-green-400 py-2 px-4"
                          : "rounded-xl bg-blue-400 py-2 px-4"
                      }
                      onClick={() => handleSlotSelection(ele, el.title)}
                    >
                      {ele}
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}

        <div className="mt-2 ml-4">
          <button
            className="rounded-xl bg-red-400 py-2 px-4"
            onClick={handleSubmit}
          >
            Done
          </button>
        </div>
      </div>
    )
  );
};

export default Slots;
