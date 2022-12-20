// Awaited<Type>
type A = Awaited<Promise<string>>;

type B = Awaited<Promise<Promise<number>>>;

type C = Awaited<boolean | Promise<number>>;

// Partial<Type>
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

const results = updateTodo(todo1, todo2);
console.log(results);

// Required<Type>
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
console.log(obj);

const obj2: Required<Props> = { a: 5 }
console.log(obj2);


// Readonly<Type>
interface Todos {
  title: string;
}
 
const todos: Readonly<Todos> = {
  title: "Delete inactive users",
};
 
todos.title = "Hello";

// Record<Keys, Type>
// Type
interface CatInfo {
  age: number,
  breed: string,
}

// Keys
type CatName = 'miffy' | 'boris' | 'mord';

const cat: Record<CatName, CatInfo> = {
  miffy: {
    age: 10,
    breed: 'Persian',
  },
  boris: {
    age: 5,
    breed: 'England',
  },
  mord: {
    age: 6,
    breed: 'Japan',
  }
}

console.log(cat);

// Pick<Type, Keys>
interface Task {
  title: string,
  description: string,
  completed: boolean
}

type taskPreview = Pick<Task, 'title' | 'completed'>;

const task: taskPreview = {
  title: 'clean room',
  completed: false,  
}

console.log(task.title);
console.log(task.completed);

// Omit<Type, Keys>
interface Tasks {
  title: string,
  description: string,
  completed: boolean,
  createdAt: number,
}

type TasksPreview = Omit<Tasks, 'completed'>;

const tasks: TasksPreview = {
  title: 'hello',
  description: 'world',
  createdAt: 1615544252770,
}

console.log(tasks);
