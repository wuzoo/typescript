interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type OmitType = Omit<Todo, "completed">;
/*
type OmitType = {
    title: string;
    description: string;
}
 */
