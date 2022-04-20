export {}

interface Todo {
  title: string;
  description: string;
}

const todo1: Todo = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2: Partial<Todo> = {
  description: 'shut'
}