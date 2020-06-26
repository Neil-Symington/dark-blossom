import React from 'react';
import './circle.styles.scss';

const Circle = ({ xPct, yPct, color, opacity }) => (
  <div
    className="circle"
    style={{
      height: `calc(${opacity}*400px + ${yPct}/100 * 100px)`,
      width: `calc(400px + ${xPct}/100 * 100px)`,
      backgroundColor: color,
      left: `calc(${xPct}% - (400px + ${xPct}/100 * 100px)/2 )`,
      top: `calc(${yPct}% - (${opacity}*400px + ${yPct}/100 * 100px)/2 )`,
      opacity: opacity,
    }}
  />
);

export default Circle;
