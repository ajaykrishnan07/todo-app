import { useRef, useState } from "react";

export const InputBox = () => {
  const inputref = useRef(null);
  const handleClick = () => {
    console.log(inputref.current.value);
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <input
          type="text"
          className="border border-black rounded-md w-3/6 h-16 text-2xl"
          ref={inputref}
        ></input>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-16 ml-2 border border-blue-700 rounded"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
