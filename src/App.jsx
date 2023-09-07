import { useState } from "react";
import { InputBox } from "./components/InputBox";
import { TaskList } from "./components/TaskList";

import "./App.css";

function App() {
  return (
    <div>
      <InputBox />
      <TaskList />
    </div>
  );
}

export default App;
