import React, { useState, useEffect } from "react";
import Maze from "./Maze";

//{["DDRDRR", "DRDDRR"]}

const Solution = ({ sol }) => {
  // console.log(sol);

  const [arr, setArr] = useState([]);
  const convertSolToArr = (str) => {
    let solArr = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    let x = 0;
    let y = 0;
    solArr[x][y] = 1;

    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === "D") x = x + 1;
      if (str.charAt(i) === "L") y = y - 1;
      if (str.charAt(i) === "R") y = y + 1;
      if (str.charAt(i) === "U") x = x - 1;
      // solArr[x][y] = 1;
      console.log(x, y);
      solArr[x][y] = 1;
    }
    return solArr;
  };

  return (
    <div>
      {sol.map((item) => {
        return (
          <>
            <br />
            console.log(item);
            <Maze sol={true} arr={convertSolToArr(item)} />
          </>
        );
      })}
      {/* <Maze
        sol={true}
        arr={[
          [1, 1, 1, 1],
          [0, 0, 0, 1],
          [0, 0, 0, 1],
          [0, 0, 0, 1],
        ]}
      /> */}
    </div>
  );
};

export default Solution;
