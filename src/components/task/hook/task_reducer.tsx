import { Task, TaskAction } from "../interface/main";

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "add_task":
      return [
        ...state,
        { id: Date.now(), title: action.payload, completed: false },
      ];    
    case "toggle_task":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case "delete_task":
        return  state.filter((task)=> task.id !== action.payload);
    case  "clear_completed":
      return state.filter((task)=> !task.completed)

    default:
      return state  
  }
};
