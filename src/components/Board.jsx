import React from "react";
import Tile from "./Tile";
import Strike from "./Strike";

export default function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      {tiles.map((value, index) => (
        <Tile
          key={index}
          playerTurn={playerTurn}
          onClick={() => onTileClick(index)}
          value={value}
          className={`
            ${index % 3 !== 2 ? "right-border" : ""}
            ${index < 6 ? "bottom-border" : ""}
          `}
        />
      ))}
      <Strike strikeClass={strikeClass} />
    </div>
  );
}
