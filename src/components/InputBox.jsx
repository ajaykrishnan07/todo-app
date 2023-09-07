import { useRef, useState } from "react";

export const InputBox = () => {
  const inputref = useRef();
  const handleClick = () => {
    const task = inputref.current.value;
    console.log(task);
  };

  return (
    <div>
      <div className=" h-40 flex items-center justify-center">
        <input
          type="text"
          className="border bg-white border-black rounded-md w-3/6 h-16 text-2xl"
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
