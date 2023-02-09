import React from 'react';

const TodoTasks = () => {
  const todos = [
    {
      id: 1,
      text: '123123',
    },
  ];

  return (
    <>
      {todos.map((todo, index) => (
        <ul>
          <li key={todo.id}>{todo.text}</li>
          <li key={index}>{todo.text}</li>
        </ul>
      ))}
    </>
  );
};

// Extracting Components with Keys
const ListItem = (props: { value: number }) => {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
};

const NumberList = (props: { numbers: number[] }) => {
  const numbers = props.numbers;

  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
};

// Keys Must Only Be Unique Among Siblings
interface BlogProps {
  id: number;
  title: string;
  content: string;
}

// Keys Must Only Be Unique Among Siblings
const Blog = (props: { posts: BlogProps[] }) => {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
};

// Embedding map() in JSX

export { TodoTasks, NumberList, Blog };
