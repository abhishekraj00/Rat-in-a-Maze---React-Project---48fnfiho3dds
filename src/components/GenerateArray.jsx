import { useRef, useState } from "react";
import Problem from "./Problem";

function makeArray(d1, d2) {
  var arr = new Array(d1),
    i,
    l;
  for (i = 0, l = d2; i < l; i++) {
    arr[i] = new Array(d1);
  }
  return arr;
}

let newArr = makeArray(4, 4);

function randomArray(a, b) {
  let nArr = makeArray(a, b);
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      nArr[i][j] = Math.floor(Math.random() * 2);
    }
  }
  nArr[0][0] = 1;
  nArr[a-1][b-1] = 1;

  return nArr;
}

function GenArr() {
  const [arrData, setArrData] = useState(newArr);

  const ref1 = useRef();
  const ref2 = useRef();
  let r;
  let c;


  function fun() {
    r = ref1.current.value;
    c = ref2.current.value;
    setArrData([...randomArray(r, c)]);
  }

  let rrr = r*(20)

  return (
    <>
      <input type="number" ref={ref1} />
      <input type="number" ref={ref2} />
      <div className="row" style={{maxWidth: `${rrr}px`}}>
        {arrData.map((e) => {
          return e.map((e) => {
            return <div className="col">{e}</div>;
          });
        })}
      </div>

      <button onClick={fun}>Array Data</button>

      <Problem ProblemArr={arrData} />
    </>
  );
}

export default GenArr;
