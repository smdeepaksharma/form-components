import React from "react";

var TodaysDate = function TodaysDate() {
  return React.createElement(
    "div",
    null,
    "Todays date is " + Date()
  );
};

export default TodaysDate;