import { useState } from "react";
import { InputBox } from "./InputBox";

export const TaskList = () => {
  const [Text, setText] = useState("");

  const handleTask = (task) => {
    setText(task);
    return task;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="border border-black bg-white rounded-md w-3/6 h-16 text-5xl leading-10">
        {handleTask}
      </div>
    </div>
  );
};
