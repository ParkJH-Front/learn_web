import React from "react";

function Square(player) {
  return(
    <button className="square" onClick={()=>{console.log("click!")}}>
      {player}
    </button>
  ); 
};

function Board(player) {
  return(
    <div>
      {/* <span>Next player : 0</span> */}
      <div className="boardRow">
        {Square()}
        {Square()}
        {Square()}
      </div>
      <div className="boardRow">
        {Square()}
        {Square()}
        {Square()}
      </div>
      <div className="boardRow">
        {Square()}
        {Square()}
        {Square()}
      </div>
    </div>
  );
};

function App() {
  return(
    <div className="game">
    {/* <Square /> */}
    <Board />
  </div>
  );
};

export default App;