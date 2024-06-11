import { TaskCard } from "./components/TaskCard";
import "./App.css";
import { useState } from "react";

export default function App() {
  const initialTask = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(initialTask?initialTask:[]);
  function handleAdd(e){
    e.preventDefault();
    const task = {
      id: Math.random()*10*Math.random(),
      taskName : e.target.input.value,
      complete : false
    }
    e.target.input.value = "";
    const newTasks = [...tasks, task];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }
  return (
    <div className="App flex item-center justify-center">
      <div className="rounded-[10px] bg-white shadow-xl p-[2%] text-center w-[35vw] mt-[10%]">
        <h1 className="text-[24px] mb-[7%]">Grocery Bud</h1>
        <div>
          <form onSubmit={handleAdd} className="flex items-center justify-center">
            <input id="input" className="bg-[#f8fafc] focus:outline-none px-[5px] py-[2px] rounded-tl-[5px] flex-1 rounded-bl-[5px] border-[1px] border-[#e2e8f0]" type="text" required autoComplete="off"/>
            <button className="text-white bg-blue-400 rounded-br-[5px] rounded-tr-[5px] px-[5px] py-[3px]">Add Item</button>
          </form>
        </div>
        <div className="py-[3%] mt-[2%]">
          {
            tasks && tasks.map((task)=>(
              <TaskCard key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
