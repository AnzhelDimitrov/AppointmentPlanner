import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({data}) => {
  return (
    <div>
      {data.map((record, index) => (
        <Tile key={index} data={record}/>
      ))}
    </div>
  );
};
