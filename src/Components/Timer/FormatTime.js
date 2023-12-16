import React from "react";

const FormatTime = ({ seconds }) => {
  const formatTime = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(
      secondsLeft
    )}`;
  };

  return <span>{formatTime()}</span>;
};

export default FormatTime;
