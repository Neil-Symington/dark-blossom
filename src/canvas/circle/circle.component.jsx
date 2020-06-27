import React from 'react';
import './circle.styles.scss';


const Circle = ({ xPct, yPct, color, opacity }) => (
  <div
    className="circle"
    style={{
      height: `calc(${opacity}*450px + ${yPct}/100 * 50px)`,
      width: `calc(450px + ${xPct}/100 * 50px)`,
      backgroundColor: color,
      left: `calc(${xPct}% - (450px + ${xPct}/100 * 50px)/2 )`,
      top: `calc(${yPct}% - (${opacity}*450px + ${yPct}/100 * 50px)/2 )`,
      opacity: opacity,
    }}
  />
);

export default Circle;
