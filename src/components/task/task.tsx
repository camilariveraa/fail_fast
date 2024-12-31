import { useReducer } from "react";
import { taskReducer } from "./hook/task_reducer";


import { useState } from "react";
import { TrashIcon } from "@radix-ui/react-icons";

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    if ((!("key" in event) || event.key === "Enter") && newTask.trim()) {
        dispatch({ type: "add_task", payload: newTask });
        setNewTask("");
      }
      
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-slate-200 rounded-sm mx-2 p-2 mt-24 border-neutral-400"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
        onKeyDown={handleAddTask} // Add the onKeyDown event listener here
      />

      <button
        className="bg-gray-600 rounded-lg mx-10 px-4 h-20 text-neutral-300 hover:bg-gray-700 mx active:bg-slate-500"
        onClick={handleAddTask} // Keep the onClick listener for button click
      >
        {" "}
        Add Task
      </button>

      <div className="mt-6 p-4 text-neutral-300">Task List</div>

      <ul>
        {tasks.map((task) => (
         <li
         key={task.id}
         className={`flex items-center justify-between p-4 border rounded-lg mb-2 ${
           task.completed ? "bg-gray-200 line-through text-gray-500" : "bg-white"
         }`}
       >
         <label className="flex items-center gap-2">
           <input
             type="checkbox"
             checked={task.completed}
             onChange={() =>
               dispatch({ type: "toggle_task", payload: task.id })
             }
             className="w-5 h-5 cursor-pointer accent-blue-500"
           />
           <span className="text-sm">{task.title}</span>
         </label>
       
         <TrashIcon
           className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700 bg-red-200 rounded-sm p-1"
           onClick={() => dispatch({ type: "delete_task", payload: task.id })}
         />
       </li>
       
        ))}
      </ul>



      {tasks.some(task => task.completed) && (
        <button
          className="bg-green-400 rounded-lg mx-10 px-4 h-20 text-white hover:bg-green-700 mx active:bg-green-500"
          onClick={() => dispatch({ type: "clear_completed" })}
        >
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default TaskManager;
