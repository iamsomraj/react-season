import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
  const SUMMER = "Let's, hit the beach! ";
  const WINTER = "Burr, it's chilly! ";
  const SUMMERICON = 'sun';
  const WINTERICON = 'snowflake';
  if (month > 2 && month < 9) {
    return {
      text: lat > 0 ? SUMMER : WINTER,
      icon: lat > 0 ? SUMMERICON : WINTERICON
    };
  }
  return {
    text: lat > 0 ? WINTER : SUMMER,
    icon: lat > 0 ? WINTERICON : SUMMERICON
  };
};

const SeasonDisplay = props => {
  const text = getSeason(props.lat, new Date().getMonth()).text;
  const iconName = getSeason(props.lat, new Date().getMonth()).icon;
  const season = text === "Let's, hit the beach! " ? 'summer' : 'winter';

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
