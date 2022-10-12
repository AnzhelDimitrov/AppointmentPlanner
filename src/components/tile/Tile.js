import React from "react";

export const Tile = ({data}) => {
  return (
    <div className="tile-container">
      {Object.values(data).map((record, index) => (
        <p className={index === 0 ? 'tile-title' : 'tile'} key={index}>{record}</p>
      ))}
    </div>
  );
};
