import React from "react";
import GameState from "./GameState";

export default function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return null;
  }
  return (
    <button
      onClick={onReset}
      className="
        reset-button 
        bg-gradient-to-r from-indigo-600 to-cyan-600 
        hover:from-cyan-600 hover:to-indigo-600 
        transition-all duration-300 ease-in-out 
        transform hover:scale-105 hover:shadow-xl 
        rounded-xl font-bold tracking-wide
      "
    >
      🔄 Play Again
    </button>
  );
}
