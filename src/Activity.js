import React from "react";
import "./Activity.css";

const Activity = ({  time, description }) => {
  return (
  <ul>
     <li>{time}</li>
     <li>{description}</li>
</ul>
  );
};

export default Activity;
