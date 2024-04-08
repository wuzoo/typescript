interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type PickType = Pick<Todo, "title" | "completed">;
