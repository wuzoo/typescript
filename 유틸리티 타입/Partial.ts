interface ITodo {
  title: string;
  description: string;
}

type PartialType = Partial<ITodo>;

/*
type PartialType = {
    title?: string | undefined;
    description?: string | undefined;
} 
*/
