export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export type TaskAction =
  | { type: "add_task"; payload: string }
  | { type: "toggle_task"; payload: number }
  | { type: "delete_task"; payload: number }
  | { type: "clear_completed"};
