import React, { useCallback, useEffect, useState } from "react";

const buttons = [
  {
    value: "AC",
    className: "col-span-2 bg-emerald-900 text-white",
    id: "clear",
  },
  { value: "/", className: "bg-emerald-200", id: "divide" },
  { value: "*", className: "bg-emerald-200", id: "multiply" },
  { value: "7", className: "bg-emerald-400", id: "seven" },
  { value: "8", className: "bg-emerald-400", id: "eight" },
  { value: "9", className: "bg-emerald-400", id: "nine" },
  { value: "-", className: "bg-emerald-200", id: "subtract" },
  { value: "4", className: "bg-emerald-400", id: "four" },
  { value: "5", className: "bg-emerald-400", id: "five" },
  { value: "6", className: "bg-emerald-400", id: "six" },
  { value: "+", className: "bg-emerald-200", id: "add" },
  { value: "1", className: "bg-emerald-400", id: "one" },
  { value: "2", className: "bg-emerald-400", id: "two" },
  { value: "3", className: "bg-emerald-400", id: "three" },
  { value: "=", className: "row-span-2 bg-emerald-200", id: "equals" },
  { value: "0", className: "col-span-2 bg-emerald-400", id: "zero" },
  { value: ".", className: "bg-emerald-400", id: "decimal" },
];

const Calculator = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("0");
  const [isNewCalculation, setIsNewCalculation] = useState<boolean>(true);

  const checkOperator = (value: string) => {
    return ["+", "-", "*", "/"].includes(value);
  };

  const handleClick = useCallback(
    (value: string) => {
      if (isNewCalculation) {
        setResult(value);
        setInput(value);
        setIsNewCalculation(false);
      } else {
        if (result === "0") {
          setResult(value);
          setInput(value);
        } else if (checkOperator(result)) {
          setResult(value);
          setInput((prev) => prev + value);
        } else {
          if (checkOperator(value)) {
            setResult(value);
          } else {
            setResult((prev) => prev + value);
          }
          setInput((prev) => prev + value);
        }
      }
    },
    [isNewCalculation, result]
  );

  const handleClear = useCallback(() => {
    setInput("");
    setResult("0");
    setIsNewCalculation(true);
  }, []);

  const handleCalculate = useCallback(() => {
    if (input) {
      try {
        const calculatedResult = eval(input).toString();
        setResult(calculatedResult);
        setInput(calculatedResult);
        setIsNewCalculation(true);
      } catch (error) {
        setResult("Error");
        setInput("");
        setIsNewCalculation(true);
      }
    }
  }, [input]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key;
      if (/^[0-9+\-*/.()]$/.test(key)) {
        handleClick(key);
      } else if (key === "Enter" || key === "=") {
        handleCalculate();
      } else if (key === "Escape" || key === "c" || key === "C") {
        handleClear();
      } else if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
        setResult((prev) => prev.slice(0, -1) || "0");
      }
    },
    [handleClick, handleCalculate, handleClear]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      id="calculator"
      className="snap-center sm:w-9/12 lg:w-3/12 text-lg sm:text-7xl"
    >
      <div
        id="display"
        className="bg-emerald-900 text-white grid grid-rows-2 p-6"
      >
        <div className="input text-end text-emerald-200">{input}</div>
        <div className="result text-end">{result}</div>
      </div>
      <div className="buttons grid grid-cols-4 gap-0 divide-y divide-x divide-emerald-900 border border-emerald-900 border-l-0">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            id={btn.id}
            className={`${btn.className} p-6`}
            onClick={() =>
              btn.value === "AC"
                ? handleClear()
                : btn.value === "="
                ? handleCalculate()
                : handleClick(btn.value)
            }
          >
            {btn.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
