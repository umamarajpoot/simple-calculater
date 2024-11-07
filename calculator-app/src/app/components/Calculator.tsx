import { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      // Caution: Use eval() with caution; consider a better evaluation method
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-4">Simple Calculator</h1>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full h-12 text-right border border-gray-300 rounded px-3 text-lg"
        />
        <h2 className="text-xl text-gray-700 text-right">{result}</h2>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/'].map((button) => (
          <button
            key={button}
            onClick={() => (button === '=' ? calculateResult() : handleClick(button))}
            className="bg-blue-500 text-white font-semibold rounded-lg p-4 hover:bg-blue-600 transition"
          >
            {button}
          </button>
        ))}
        <button
          onClick={clearInput}
          className="bg-red-500 text-white font-semibold rounded-lg p-4 hover:bg-red-600 transition col-span-4"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
