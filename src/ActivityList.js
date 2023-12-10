import React from "react";
import "./ActivityList.css";
import Activity from './Activity'

 const ActivityList = ({ activities }) => {
  if (activities.length > 0) {

  return (
    <ul className="activity-list">
      {activities.map((activity, index) => (
        <Activity key={index} time={activity.time} description={activity.description}/>
      ))}
    </ul>
     


  );
 };
};

export default ActivityList;
