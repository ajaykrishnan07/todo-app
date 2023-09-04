import { useState } from "react";

export const InputBox = () => {
  return (
    <input
      type="text"
      className="border border-black rounded-md w-3/6 h-16 text-2xl"
      placeholder="Enter your task"
    ></input>
  );
};
