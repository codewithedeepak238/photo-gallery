
export const TaskCard = ({task, tasks, setTasks}) => {
  function handleComplete(id){
    const newTask = tasks.map((task)=>{
      if(task.id === id){
        task.complete = task.complete===true?false:true;
      }
      return task;
    })
    localStorage.setItem("tasks",JSON.stringify(newTask));
    setTasks(newTask);
  }
  function handleRemove(id){
    const newTask = tasks.filter((task)=>task.id!==id);
    localStorage.setItem("tasks",JSON.stringify(newTask));
    setTasks(newTask);
  }
  return (
    <div className="flex justify-between items-center py-[5px]">
      <div className="flex items-center gap-[10px]">
        <input type="checkbox" onChange={()=>handleComplete(task.id)}/>
        <p className={task.complete?"line-through":""}>{task.taskName}</p>
      </div>
        <button className="text-blue-600" onClick={()=>handleRemove(task.id)}>Remove</button>
    </div>
  )
}
