import React, { useState, useEffect } from "react";
// import GenerateArray, { funArray } from "./GenerateArray";
import Maze from "./Maze";
import Solution from "./Solution";

// const probelemArray = [
//   [1, 1, 1, 1],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [1, 1, 1, 1],
// ];

const Problem = ({ ProblemArr }) => {
  // const MAX = 5;
  let res = [];

  function isValid(row, col, m, n) {
    if (row >= 0 && row < n && col >= 0 && col < n && m[row][col] == 1) {
      return true;
    }
    return false;
  }

  function findPathHelper(m, n, x, y, dx, dy, path) {
    if (x == n - 1 && y == n - 1) {
      res.push(path);
      return;
    }
    let dir = "DLRU";
    for (let i = 0; i < 4; i++) {
      let row = x + dx[i];
      let col = y + dy[i];
      if (isValid(row, col, m, n)) {
        m[row][col] = 2;
        findPathHelper(m, n, row, col, dx, dy, path + dir[i]);
        m[row][col] = 1;
      }
    }
  }
  function printPath(m, n) {
    let dx = [1, 0, 0, -1];
    let dy = [0, -1, 1, 0];
    if (m[0][0] == 1) {
      m[0][0] = 2;
      findPathHelper(m, n, 0, 0, dx, dy, "");
    }
  }

  let m = [
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 0, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1],
  ];

  // let m = ProblemArr;
  // console.log(ProblemArr +" Abhishek")

  let n = m.length;

  printPath(m, n);

  return (
    <div>
      <Maze problem={true} arr={m} />

      <Solution sol={res} />
    </div>
  );
};

export default Problem;
