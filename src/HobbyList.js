import React from "react";
import "./HobbyList.css";

const HobbyList = ({ hobbies }) => {
  return (
    <div className="hobby-list">
      {hobbies.length > 0 && (
        <div>
          <h4>Hobbies</h4>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HobbyList;
