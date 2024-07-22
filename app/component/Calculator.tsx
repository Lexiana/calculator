import React, { useState } from 'react'

const button = [
    { value: 'AC', className: 'col-span-2 h-12 bg-emerald-900 text-white', id: 'clear' },
    { value: '/', className: ' h-12  bg-emerald-200', id: 'divide' },
    { value: '*', className: ' h-12  bg-emerald-200', id: 'multiply' },
    { value: '7', className: ' h-12  bg-emerald-400', id: 'seven' },
    { value: '8', className: ' h-12  bg-emerald-400', id: 'eight' },
    { value: '9', className: ' h-12  bg-emerald-400', id: 'nine' },
    { value: '-', className: ' h-12  bg-emerald-200', id: 'subtract' },
    { value: '4', className: ' h-12  bg-emerald-400', id: 'four' },
    { value: '5', className: ' h-12  bg-emerald-400', id: 'five' },
    { value: '6', className: ' h-12  bg-emerald-400', id: 'six' },
    { value: '+', className: ' h-12  bg-emerald-200', id: 'add' },
    { value: '1', className: ' h-12  bg-emerald-400', id: 'one' },
    { value: '2', className: ' h-12  bg-emerald-400', id: 'two' },
    { value: '3', className: ' h-12  bg-emerald-400', id: 'three' },
    { value: '=', className: 'row-span-2    bg-emerald-200', id: 'equals' },
    { value: '0', className: 'col-span-2 h-12  bg-emerald-400', id: 'zero' },
    { value: '.', className: ' h-12  bg-emerald-400', id: 'decimal' },
];
const Calculator = () => {
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<string>("0");
    const [isNewCalculation, setIsNewCalculation] = useState<boolean>(true);
    const handleClick = (value: string) => {
        if (isNewCalculation) {
            setResult(value);
            setInput(value);
            setIsNewCalculation(false);
        } else {
            if (result === "0") {
                setResult(value);
                setInput(value);
                return;
            } else if (checkOperator(result)) {
                setResult(value);
                setInput((prev) => prev + value);
                return;
            }
            switch (value) {
                case "/":
                case "*":
                case "+":
                case "-":
                    setResult(value);
                    setInput((prev) => prev + value);
                    break;
                default:
                    setResult((prev) => prev + value);
                    setInput((prev) => prev + value);
                    break;
            }
        }

    }
    const checkOperator = (value: string) => {
        if (value === "+" || value === "-" || value === "*" || value === "/") {
            return true;
        }
        return false;
    }
    const handleClear = () => {
        setInput("");
        setResult("0");
        setIsNewCalculation(true);
    }
    const handleCalculate = () => {
        if (input) {
            try {
                setResult(eval(input).toString());
                setIsNewCalculation(true);
            } catch (error) {
                setResult("Error");
                setInput("");
                setIsNewCalculation(true);
            }
        }

    }

    

    return (
        <div id='calculator' className='snap-center w-2/12 text-lg'>
            <div id='display' className='bg-emerald-900 h-20 text-white grid grid-rows-2 p-2'>
                <div className="input text-end text-emerald-200">{input}</div>
                <div className="result text-end">{result}</div>
            </div>
            <div className='buttons grid grid-cols-4 gap-0 divide-y divide-x divide-emerald-900 border border-emerald-900 border-l-0'>
                {button.map((btn) => (
                    <button key={btn.id} id={btn.id} className={btn.className}
                        onClick={() => btn.value === "AC" ? handleClear() :
                            btn.value === "=" ? handleCalculate() : handleClick(btn.value)}
                    >{btn.value}</button>
                ))}

            </div>
        </div>
    )
}

export default Calculator