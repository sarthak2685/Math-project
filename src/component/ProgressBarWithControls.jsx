import React, { useState } from 'react';
import './ProgressBarWithControls.css'; 

const ProgressBarWithControls = () => {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([0]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const increment = () => {
    if (num < 150) {
      const newNum = num + 1;
      const newHistory = history.slice(0, historyIndex + 1);
      setNum(newNum);
      setHistory([...newHistory, newNum]);
      setHistoryIndex(newHistory.length);
    }
  };

  const decrement = () => {
    if (num > 0) {
      const newNum = num - 1;
      const newHistory = history.slice(0, historyIndex + 1);
      setNum(newNum);
      setHistory([...newHistory, newNum]);
      setHistoryIndex(newHistory.length);
    }
  };

  const undo = () => {
    if (historyIndex > 0) {
      setNum(history[historyIndex - 1]);
      setHistoryIndex(historyIndex - 1);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setNum(history[historyIndex + 1]);
      setHistoryIndex(historyIndex + 1);
    }
  };

  return (
    <div className="p-8 mt-[10rem]">
      <div className="flex justify-center items-center space-x-4 mb-8">
        <button
          className="px-[4rem] py-[4rem]  bg-red-500 text-2xl text-white hover:bg-red-600 active:bg-red-700 transition duration-300 transform hover:scale-105 active:scale-95"
          onClick={decrement}
        >
          -1
        </button>
        <button
          className="px-[4rem] py-[4rem]  bg-green-500 text-2xl text-white rounded hover:bg-green-600 active:bg-green-700 transition duration-300 transform hover:scale-105 active:scale-95"
          onClick={increment}
        >
          +1
        </button>
      </div>

      <div className="flex justify-center items-center space-x-4 mb-8">
        <button
          className="px-[3rem] py-[4rem] bg-blue-500 text-2xl text-white rounded hover:bg-blue-600 active:bg-blue-700 transition duration-300  transform hover:scale-105 active:scale-95 mr-2"
          onClick={undo}
        >
          Undo
        </button>
        <button
          className="px-[3rem] py-[4rem] bg-yellow-500 text-2xl text-white rounded hover:bg-yellow-600 active:bg-yellow-700 transition duration-300 transform hover:scale-105 active:scale-95"
          onClick={redo}
        >
          Redo
        </button>
      </div>

      <div className="relative h-4 bg-gray-200 rounded overflow-hidden cursor-pointer hover:bg-gray-300 active:bg-gray-400 transition duration-300">
        <div
          className="absolute h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${num / 150 * 100}%` }}
        ></div>
      </div>
      <div className="text-center mt-2">{num}</div>
    </div>
  );
};

export default ProgressBarWithControls;
