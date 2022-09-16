import React, { useState } from "react";
import "./Calculator.css";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

const Calculadora = () => {
  const [num, setNum] = useState("");
  const [oldNum, setOldNum] = useState("");
  const [operator, setOperator] = useState("");

  function inputNum(e) {
    setNum(num + e.target.value);
  }

  function clear(e) {
    setNum('');
  }

  function porcentage(e) {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    setOperator(e.target.value);
    setOldNum(num);
    setNum("");
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldNum)/ parseFloat(num));
    } else if (operator === "x") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return (
    <div>
      <Box m={5}>
        <Container maxWidth="xs">
          <div className="wrapper">
            <Box m={6} />
            <h1 className="result">{num}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={porcentage}>%</button>
            <button className="orange" onClick={operatorHandler} value="/">
              /
            </button>
            <button className="gray" onClick={inputNum} value={7}>
              7
            </button>
            <button className="gray" onClick={inputNum} value={8}>
              8
            </button>
            <button className="gray" onClick={inputNum} value={9}>
              9
            </button>
            <button className="orange" onClick={operatorHandler} value="x">
              x
            </button>
            <button className="gray" onClick={inputNum} value={4}>
              4
            </button>
            <button className="gray" onClick={inputNum} value={5}>
              5
            </button>
            <button className="gray" onClick={inputNum} value={6}>
              6
            </button>
            <button className="orange" onClick={operatorHandler} value="-">
              -
            </button>
            <button className="gray" onClick={inputNum} value={1}>
              1
            </button>
            <button className="gray" onClick={inputNum} value={2}>
              2
            </button>
            <button className="gray" onClick={inputNum} value={3}>
              3
            </button>
            <button className="orange" onClick={operatorHandler} value="+">
              +
            </button>
            <button className="gray" id="zero" onClick={inputNum} value={0}>
              0
            </button>
            <button className="gray" onClick={inputNum} value={"."}>
              ,
            </button>
            <button className="orange" onClick={calculate}>
              =
            </button>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default Calculadora;
